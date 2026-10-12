"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Plus,
  Search,
  Trash2,
  Paperclip,
  Send,
  Square,
  ArrowLeft,
  Moon,
  Sun,
  PanelLeftClose,
  PanelLeft,
  Check,
  Copy,
  Sparkles,
  FileText,
  Image as ImageIcon,
  Music,
  File,
  X,
  AlertCircle,
  BookOpen,
  Atom,
  PenTool,
  Calculator,
  User,
  Briefcase,
} from "lucide-react";
import { marked } from "marked";
import DOMPurify from "dompurify";

interface AttachedFile {
  name: string;
  size: number;
  type: string;
  mimeType: string;
  data: string; // Base64
}

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  file?: AttachedFile;
  timestamp: number;
}

interface ChatSession {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  messages: ChatMessage[];
}

const STORAGE_KEY = "salsabila_gemini_chat_sessions_v2";
const CURRENT_ID_KEY = "salsabila_gemini_current_session_id_v2";

const GREETING_TEXT =
  "Halo! Aku **Chatbot AI**, asisten cerdas yang siap membantu memahami materi pelajaran, konsep sulit, tugas akademik, maupun informasi seputar portofolio dan proyek **Salsabila Anandita Putri**. Mau bahas apa hari ini?";

const SUGGESTIONS = [
  {
    icon: Atom,
    title: "Hukum Gravitasi Newton",
    desc: "Penjelasan bertahap + analogi santai sehari-hari",
    prompt: "Jelaskan konsep hukum gravitasi Newton secara santai dan beri analogi sehari-hari.",
  },
  {
    icon: PenTool,
    title: "Membuat Kerangka Esai",
    desc: "Struktur tulisan akademis, argumen & opini",
    prompt: "Bagaimana tips membuat kerangka esai yang rapi dan menarik? Berikan langkah-langkahnya.",
  },
  {
    icon: BookOpen,
    title: "Fotosintesis Biologi",
    desc: "Reaksi terang & gelap serta perbedaannya",
    prompt: "Jelaskan perbedaan fotosintesis reaksi terang dan reaksi gelap dalam biologi secara ringkas.",
  },
  {
    icon: Calculator,
    title: "Konsep Dasar Aljabar",
    desc: "Variabel, konstanta & contoh penyelesaian",
    prompt: "Bantu jelaskan konsep dasar aljabar dan berikan 1 contoh soal serta penyelesaiannya.",
  },
  {
    icon: User,
    title: "Tentang Salsabila",
    desc: "Profil, keahlian backend & Quality Assurance",
    prompt: "Ceritakan tentang profil Salsabila Anandita Putri, latar belakang pendidikan, dan keahlian teknisnya.",
  },
  {
    icon: Briefcase,
    title: "Proyek & Portofolio",
    desc: "Teknologi, REST API & aplikasi yang dibangun",
    prompt: "Apa saja pengalaman, tech stack utama, dan proyek unggulan yang pernah dikerjakan oleh Salsabila?",
  },
];

export default function ChatbotPage() {
  const [, startTransition] = useTransition();

  // State
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputText, setInputText] = useState("");
  const [attachedFile, setAttachedFile] = useState<AttachedFile | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Modal confirm state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    type: "delete-session" | "clear-all";
    sessionId?: string;
  }>({
    isOpen: false,
    type: "clear-all",
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize theme & load sessions
  useEffect(() => {
    // Check dark mode
    const savedTheme = localStorage.getItem("gemini_chat_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Load sessions
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const storedId = localStorage.getItem(CURRENT_ID_KEY);
      if (stored) {
        const parsed: ChatSession[] = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSessions(parsed);
          const activeId =
            storedId && parsed.some((s) => s.id === storedId)
              ? storedId
              : parsed[0].id;
          setCurrentSessionId(activeId);
          return;
        }
      }
    } catch (e) {
      console.error("Error loading chat history:", e);
    }

    // Default new session
    createNewSession();
  }, []);

  // Save sessions to localStorage
  const saveSessions = (newSessions: ChatSession[], activeId?: string) => {
    setSessions(newSessions);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSessions));
      if (activeId) {
        localStorage.setItem(CURRENT_ID_KEY, activeId);
      }
    } catch (e) {
      console.error("Error saving sessions:", e);
    }
  };

  const createNewSession = () => {
    if (isGenerating) {
      abortGeneration();
    }
    const newId = "session_" + Date.now();
    const newSession: ChatSession = {
      id: newId,
      title: "Percakapan Baru",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      messages: [],
    };
    const updated = [newSession, ...sessions];
    setCurrentSessionId(newId);
    saveSessions(updated, newId);
    setInputText("");
    setAttachedFile(null);
  };

  const currentSession = sessions.find((s) => s.id === currentSessionId) || {
    id: currentSessionId,
    title: "Percakapan Baru",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    messages: [],
  };

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentSession.messages, isGenerating]);

  // Dark mode toggle
  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    localStorage.setItem("gemini_chat_theme", nextDark ? "dark" : "light");
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // File Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert("Ukuran file maksimal adalah 15 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target?.result as string;
      setAttachedFile({
        name: file.name,
        size: file.size,
        type: file.type || "application/octet-stream",
        mimeType: file.type || "application/octet-stream",
        data: base64Data,
      });
    };
    reader.readAsDataURL(file);

    // reset input
    e.target.value = "";
  };

  const formatFileSize = (bytes: number) => {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const abortGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsGenerating(false);
  };

  // Submit message
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query && !attachedFile) return;
    if (isGenerating) return;

    const userMessage: ChatMessage = {
      id: "msg_" + Date.now(),
      role: "user",
      text: query,
      file: attachedFile || undefined,
      timestamp: Date.now(),
    };

    const newMessages = [...currentSession.messages, userMessage];

    // Auto title from prompt if it's the first message
    const isFirst = currentSession.messages.length === 0;
    const sessionTitle = isFirst
      ? query.slice(0, 32) || attachedFile?.name?.slice(0, 32) || "Percakapan Baru"
      : currentSession.title;

    const updatedSession: ChatSession = {
      ...currentSession,
      title: sessionTitle,
      updatedAt: Date.now(),
      messages: newMessages,
    };

    const updatedSessions = sessions.map((s) =>
      s.id === currentSession.id ? updatedSession : s
    );
    saveSessions(updatedSessions, currentSession.id);

    setInputText("");
    setAttachedFile(null);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    // Create assistant placeholder message
    const assistantMessageId = "msg_asst_" + Date.now();
    const assistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: "model",
      text: "",
      timestamp: Date.now(),
    };

    const sessionWithAsst: ChatSession = {
      ...updatedSession,
      messages: [...newMessages, assistantMessage],
    };

    saveSessions(
      sessions.map((s) => (s.id === currentSession.id ? sessionWithAsst : s)),
      currentSession.id
    );

    setIsGenerating(true);
    abortControllerRef.current = new AbortController();

    try {
      // Format conversation history for Gemini API
      const conversationPayload = newMessages.map((m) => ({
        role: m.role,
        text: m.text,
        file: m.file
          ? {
              name: m.file.name,
              mimeType: m.file.mimeType,
              data: m.file.data,
            }
          : undefined,
      }));

      // Support relative Next.js API or standalone Express server URL
      const apiUrl = process.env.NEXT_PUBLIC_CHAT_API_URL || "/api/chat";

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversation: conversationPayload,
          stream: true,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!res.ok) {
        let errMessage = "Gagal menghubungi API server.";
        try {
          const errData = await res.json();
          if (errData.error) errMessage = errData.error;
        } catch {
          // ignore
        }
        throw new Error(errMessage);
      }

      if (!res.body) {
        throw new Error("Respons server kosong atau tidak mendukung streaming.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let streamedAnswer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data:")) continue;

          const dataPayload = trimmed.replace(/^data:\s*/, "");
          if (dataPayload === "[DONE]") {
            break;
          }

          try {
            const parsed = JSON.parse(dataPayload);
            if (parsed.text) {
              streamedAnswer += parsed.text;
              // Update current message text in state
              setSessions((prevSessions) =>
                prevSessions.map((sess) => {
                  if (sess.id !== currentSession.id) return sess;
                  return {
                    ...sess,
                    messages: sess.messages.map((msg) =>
                      msg.id === assistantMessageId
                        ? { ...msg, text: streamedAnswer }
                        : msg
                    ),
                  };
                })
              );
            } else if (parsed.error) {
              streamedAnswer += `\n\n*(Error: ${parsed.error})*`;
              setSessions((prevSessions) =>
                prevSessions.map((sess) => {
                  if (sess.id !== currentSession.id) return sess;
                  return {
                    ...sess,
                    messages: sess.messages.map((msg) =>
                      msg.id === assistantMessageId
                        ? { ...msg, text: streamedAnswer }
                        : msg
                    ),
                  };
                })
              );
            }
          } catch {
            // plain text chunk fallback
          }
        }
      }

      // Final save to localStorage
      const finalSessions = sessions.map((s) => {
        if (s.id !== currentSession.id) return s;
        return {
          ...s,
          updatedAt: Date.now(),
          messages: s.messages.map((msg) =>
            msg.id === assistantMessageId ? { ...msg, text: streamedAnswer } : msg
          ),
        };
      });
      saveSessions(finalSessions, currentSession.id);
    } catch (err: unknown) {
      if ((err as Error)?.name === "AbortError") {
        console.log("Stream generation dibatalkan oleh pengguna.");
      } else {
        const errMsg = (err as Error)?.message || "Terjadi kesalahan saat memproses jawaban.";
        setSessions((prevSessions) =>
          prevSessions.map((sess) => {
            if (sess.id !== currentSession.id) return sess;
            return {
              ...sess,
              messages: sess.messages.map((msg) =>
                msg.id === assistantMessageId
                  ? {
                      ...msg,
                      text:
                        msg.text ||
                        `⚠️ Maaf, terjadi kendala: **${errMsg}**\n\nSilakan pastikan \`GEMINI_API_KEY\` telah diisi di file \`.env.local\` atau coba kembali sesaat lagi.`,
                    }
                  : msg
              ),
            };
          })
        );
      }
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null;
    }
  };

  // Copy code helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Render markdown with DOMPurify
  const renderMarkdown = (rawContent: string) => {
    if (!rawContent) return "";
    try {
      marked.setOptions({
        gfm: true,
        breaks: true,
      });
      const html = marked.parse(rawContent) as string;
      return DOMPurify.sanitize(html);
    } catch {
      return rawContent;
    }
  };

  // Confirm delete single session or all
  const handleDeleteSession = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setConfirmModal({
      isOpen: true,
      type: "delete-session",
      sessionId: id,
    });
  };

  const handleClearAllHistory = () => {
    setConfirmModal({
      isOpen: true,
      type: "clear-all",
    });
  };

  const executeConfirmedAction = () => {
    if (confirmModal.type === "delete-session" && confirmModal.sessionId) {
      const remaining = sessions.filter((s) => s.id !== confirmModal.sessionId);
      if (remaining.length === 0) {
        createNewSession();
      } else {
        const nextActive =
          currentSessionId === confirmModal.sessionId
            ? remaining[0].id
            : currentSessionId;
        setCurrentSessionId(nextActive);
        saveSessions(remaining, nextActive);
      }
    } else if (confirmModal.type === "clear-all") {
      const newSession: ChatSession = {
        id: "session_" + Date.now(),
        title: "Percakapan Baru",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        messages: [],
      };
      setCurrentSessionId(newSession.id);
      saveSessions([newSession], newSession.id);
    }
    setConfirmModal({ isOpen: false, type: "clear-all" });
  };

  // Filtered session list for search
  const filteredSessions = sessions.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`h-screen w-screen overflow-hidden flex font-sans ${isDarkMode ? "dark bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"}`}>
      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 md:hidden transition-opacity"
        />
      )}

      {/* ====================================================================
          SIDEBAR
          ==================================================================== */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-72 sm:w-80 flex flex-col border-r transition-all duration-300 ease-in-out shrink-0 select-none ${
          isDarkMode
            ? "bg-zinc-900/95 border-zinc-800 text-zinc-200"
            : "bg-zinc-50 border-zinc-200/80 text-zinc-800"
        } ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:-ml-72 sm:md:-ml-80"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-inherit flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-tight leading-none">
                Chatbot AI
              </h2>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Gemini 3.5 Flash
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 transition-colors"
            title="Tutup Menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action: New Chat & Back to Portfolio */}
        <div className="p-3 space-y-2">
          <button
            type="button"
            onClick={createNewSession}
            className="w-full flex items-center gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2.5 text-xs font-medium transition-all shadow-xs group cursor-pointer"
          >
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            <span className="flex-1 text-left font-semibold">Percakapan Baru</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">
              New
            </span>
          </button>

          <Link
            href="/"
            className="w-full flex items-center gap-2 rounded-xl bg-transparent hover:bg-zinc-200/70 dark:hover:bg-zinc-800 px-3 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-300/80 dark:border-zinc-700/80 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Portofolio</span>
          </Link>
        </div>

        {/* Search History */}
        <div className="px-3 pb-2">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 absolute left-2.5 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari riwayat percakapan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs placeholder:text-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="px-4 py-1.5 flex items-center justify-between text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
          <span>Riwayat Chat</span>
          <span className="font-mono text-[10px] lowercase">
            {filteredSessions.length} sesi
          </span>
        </div>

        {/* Session List */}
        <div className="flex-1 overflow-y-auto px-2 py-1 space-y-1">
          {filteredSessions.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-400">
              Tidak ada percakapan
            </div>
          ) : (
            filteredSessions.map((sess) => {
              const isActive = sess.id === currentSessionId;
              return (
                <div
                  key={sess.id}
                  onClick={() => {
                    startTransition(() => {
                      setCurrentSessionId(sess.id);
                      localStorage.setItem(CURRENT_ID_KEY, sess.id);
                    });
                  }}
                  className={`group relative flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60 shadow-xs"
                      : "hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  <span className="truncate flex-1 text-left">
                    {sess.title || "Percakapan Baru"}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => handleDeleteSession(sess.id, e)}
                    className="opacity-0 group-hover:opacity-100 p-1 rounded-md hover:bg-red-500/10 text-zinc-400 hover:text-red-500 transition-opacity"
                    title="Hapus percakapan"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-inherit flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={handleClearAllHistory}
            className="text-[11px] text-zinc-500 dark:text-zinc-400 hover:text-red-600 flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Bersihkan semua histori"
          >
            <Trash2 className="w-3 h-3" />
            <span>Bersihkan Histori</span>
          </button>

          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Online
          </span>
        </div>
      </aside>

      {/* ====================================================================
          MAIN CHAT VIEW
          ==================================================================== */}
      <main className="flex-1 flex flex-col h-full min-w-0 relative overflow-hidden">
        {/* Top Navigation Bar */}
        <header
          className={`h-14 px-4 sm:px-6 border-b flex items-center justify-between sticky top-0 z-20 shrink-0 backdrop-blur-md ${
            isDarkMode
              ? "bg-zinc-950/80 border-zinc-800/80"
              : "bg-white/80 border-zinc-200/80"
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer"
              title="Buka/Tutup Sidebar"
            >
              {sidebarOpen ? (
                <PanelLeftClose className="w-4 h-4" />
              ) : (
                <PanelLeft className="w-4 h-4" />
              )}
            </button>

            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-sm sm:text-base truncate max-w-[170px] sm:max-w-xs md:max-w-md">
                {currentSession.title || "Chatbot AI"}
              </h1>
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10">
                <Sparkles className="w-3 h-3" />
                Gemini 3.5 Flash
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Dark mode button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 h-9 w-9 text-xs transition-colors shadow-xs cursor-pointer"
              title="Ganti Tema Gelap / Terang"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Top New Chat Shortcut */}
            <button
              type="button"
              onClick={createNewSession}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 h-9 text-xs font-medium transition-colors shadow-xs cursor-pointer"
              title="Mulai percakapan baru"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Baru</span>
            </button>
          </div>
        </header>

        {/* Chat Scrollable Container */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-6 scroll-smooth">
          <div className="max-w-3xl mx-auto w-full flex flex-col space-y-5">
            {/* Empty State Banner & Suggestion Chips */}
            {currentSession.messages.length === 0 && (
              <div className="pt-4 pb-6 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Google Gemini 3.5 Flash Multimodal</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Halo! Ada yang bisa saya bantu hari ini?
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
                    Tanyakan materi sekolah/kuliah, panduan pemrograman, analisis berkas dokumen/gambar/audio, atau seputar profil & proyek portofolio Salsabila.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SUGGESTIONS.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendMessage(item.prompt)}
                        className={`text-left p-3.5 rounded-xl border transition-all text-xs group shadow-xs flex flex-col gap-1.5 cursor-pointer ${
                          isDarkMode
                            ? "bg-zinc-900 border-zinc-800 hover:bg-zinc-800/80 hover:border-zinc-700"
                            : "bg-white border-zinc-200/90 hover:bg-zinc-50 hover:border-blue-400/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed">
                          {item.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Messages Stream */}
            <div className="space-y-6">
              {currentSession.messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 sm:gap-4 ${
                      isUser ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-semibold shadow-xs ${
                        isUser
                          ? "bg-blue-600 text-white"
                          : "bg-zinc-800 text-zinc-100 border border-zinc-700"
                      }`}
                    >
                      {isUser ? "You" : <Sparkles className="w-4 h-4 text-blue-400" />}
                    </div>

                    {/* Content Box */}
                    <div
                      className={`flex flex-col gap-1.5 max-w-[85%] sm:max-w-[78%] ${
                        isUser ? "items-end" : "items-start"
                      }`}
                    >
                      {/* Attached File Preview if user uploaded */}
                      {msg.file && (
                        <div className="flex items-center gap-2 p-2 rounded-xl border border-blue-300 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 text-xs mb-1">
                          {msg.file.mimeType.startsWith("image/") ? (
                            <ImageIcon className="w-4 h-4 text-blue-600" />
                          ) : msg.file.mimeType.startsWith("audio/") ? (
                            <Music className="w-4 h-4 text-purple-600" />
                          ) : msg.file.mimeType.includes("pdf") ? (
                            <FileText className="w-4 h-4 text-red-500" />
                          ) : (
                            <File className="w-4 h-4 text-zinc-500" />
                          )}
                          <span className="font-medium truncate max-w-[180px]">
                            {msg.file.name}
                          </span>
                          <span className="text-[10px] text-zinc-400">
                            ({formatFileSize(msg.file.size)})
                          </span>
                        </div>
                      )}

                      {/* Text Bubble */}
                      <div
                        className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs ${
                          isUser
                            ? "bg-blue-600 text-white rounded-tr-xs"
                            : isDarkMode
                            ? "bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-tl-xs"
                            : "bg-white border border-zinc-200 text-zinc-800 rounded-tl-xs"
                        }`}
                      >
                        {isUser ? (
                          <p className="whitespace-pre-wrap">{msg.text}</p>
                        ) : msg.text ? (
                          <div
                            className="chat-prose prose prose-sm dark:prose-invert max-w-none break-words"
                            dangerouslySetInnerHTML={{
                              __html: renderMarkdown(msg.text),
                            }}
                          />
                        ) : (
                          <div className="flex items-center gap-1.5 py-1 text-zinc-400">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                            <span className="text-xs">Sedang mengetik jawaban...</span>
                          </div>
                        )}
                      </div>

                      {/* Copy Message Action for AI */}
                      {!isUser && msg.text && (
                        <div className="flex items-center gap-1 text-[11px] text-zinc-400 px-1">
                          <button
                            type="button"
                            onClick={() => handleCopy(msg.text, msg.id)}
                            className="inline-flex items-center gap-1 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors p-1 rounded-sm cursor-pointer"
                            title="Salin jawaban"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span className="text-emerald-500">Tersalin</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Salin</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        {/* Floating Composer Footer */}
        <footer className="p-3 sm:p-5 bg-gradient-to-t from-inherit via-inherit to-transparent shrink-0">
          <div className="max-w-3xl mx-auto w-full relative">
            {/* Floating Stop Button Pill */}
            {isGenerating && (
              <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-10">
                <button
                  type="button"
                  onClick={abortGeneration}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-300 dark:border-red-900 bg-white dark:bg-zinc-900 hover:bg-red-50 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 text-xs font-semibold shadow-md transition-all active:scale-95 cursor-pointer"
                  title="Hentikan jawaban"
                >
                  <Square className="w-3 h-3 fill-current" />
                  <span>Berhenti Menjawab</span>
                </button>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex flex-col gap-2"
            >
              {/* Attached File Preview Bar */}
              {attachedFile && (
                <div
                  className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl border text-xs shadow-xs animate-in fade-in ${
                    isDarkMode
                      ? "bg-zinc-900 border-zinc-800"
                      : "bg-zinc-50 border-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                      {attachedFile.mimeType.startsWith("image/") ? (
                        <ImageIcon className="w-4 h-4" />
                      ) : attachedFile.mimeType.startsWith("audio/") ? (
                        <Music className="w-4 h-4" />
                      ) : attachedFile.mimeType.includes("pdf") ? (
                        <FileText className="w-4 h-4 text-red-500" />
                      ) : (
                        <File className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="font-medium truncate block max-w-[200px] sm:max-w-xs">
                        {attachedFile.name}
                      </span>
                      <span className="text-[10px] text-zinc-400 block">
                        {formatFileSize(attachedFile.size)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAttachedFile(null)}
                    className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-red-500 transition-colors cursor-pointer"
                    title="Hapus lampiran"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Composer Box */}
              <div
                className={`relative flex items-center rounded-2xl border p-1 sm:p-1.5 gap-1 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500 ${
                  isDarkMode
                    ? "bg-zinc-900 border-zinc-800"
                    : "bg-white border-zinc-300"
                }`}
              >
                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,audio/*,.pdf,.txt,.doc,.docx,.csv"
                  className="hidden"
                />

                {/* Attach File Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Lampirkan Dokumen, Gambar, atau Audio"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors shrink-0 cursor-pointer"
                >
                  <Paperclip className="w-4 h-4" />
                </button>

                {/* Textarea */}
                <textarea
                  ref={textareaRef}
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${Math.min(e.target.scrollHeight, 140)}px`;
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  rows={1}
                  placeholder="Ketik pertanyaan atau lampirkan berkas..."
                  className="w-full bg-transparent px-2 py-2 text-xs sm:text-sm placeholder:text-zinc-400 focus:outline-hidden resize-none max-h-36 overflow-y-auto leading-relaxed"
                />

                {/* Send / Stop Button */}
                {isGenerating ? (
                  <button
                    type="button"
                    onClick={abortGeneration}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all shadow-xs shrink-0 cursor-pointer"
                    title="Berhenti menjawab"
                  >
                    <Square className="w-3.5 h-3.5 fill-current" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!inputText.trim() && !attachedFile}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs shrink-0 cursor-pointer"
                    title="Kirim pesan"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Composer sub-hints */}
              <div className="flex items-center justify-between px-1 text-[10px] text-zinc-400 select-none">
                <span className="hidden sm:inline">
                  Tekan <kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">Enter</kbd> untuk kirim, <kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">Shift+Enter</kbd> baris baru
                </span>
                <span className="sm:hidden">Chatbot AI • Gemini 3.5 Flash</span>
                <span className="ml-auto">Verifikasi informasi penting</span>
              </div>
            </form>
          </div>
        </footer>
      </main>

      {/* Confirmation Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setConfirmModal({ isOpen: false, type: "clear-all" })}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
          />
          <div
            className={`relative w-full max-w-md rounded-2xl border p-6 shadow-2xl z-10 animate-in fade-in zoom-in-95 ${
              isDarkMode
                ? "bg-zinc-900 border-zinc-800 text-zinc-100"
                : "bg-white border-zinc-200 text-zinc-900"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold">
                  {confirmModal.type === "delete-session"
                    ? "Hapus Percakapan Ini?"
                    : "Hapus Semua Riwayat Percakapan?"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Tindakan ini tidak dapat dibatalkan. Riwayat chat akan dihapus secara permanen dari browser Anda.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => setConfirmModal({ isOpen: false, type: "clear-all" })}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={executeConfirmedAction}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
