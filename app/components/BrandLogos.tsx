import React from "react";

interface LogoProps {
  className?: string;
}

export function ReactLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path
        d="M149.508 157.438L69.147 54H54V125.979H66.9791V69.8661L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
        fill="url(#next_grad)"
      />
      <rect x="115" y="54" width="13" height="72" fill="url(#next_grad_2)" />
      <defs>
        <linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next_grad_2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path
        d="M11.6 116.4V11.6h104.8v104.8H11.6z"
        fill="#3178C6"
      />
      <path
        d="M70.1 58.9h-15v47.2H42.7V58.9H27.9V47.5h42.2v11.4zm46.3 12.6c0 3.3-.8 6.4-2.4 9.2-1.6 2.8-3.9 5.1-6.9 6.8s-6.6 2.6-10.7 2.6c-3.4 0-6.5-.6-9.3-1.8-2.8-1.2-5-2.8-6.6-4.9l7.7-8.3c2.4 2.8 5.2 4.2 8.4 4.2 2.3 0 4.1-.5 5.5-1.6 1.4-1.1 2.1-2.4 2.1-4 0-1.2-.4-2.3-1.3-3.1s-2.1-1.6-3.8-2.3c-1.7-.7-3.8-1.5-6.4-2.4-3.6-1.3-6.6-2.9-8.9-4.8-2.3-1.9-3.5-4.7-3.5-8.4 0-3.1.8-5.9 2.4-8.5 1.6-2.6 3.8-4.6 6.7-6.1s6.2-2.2 9.9-2.2c3.1 0 6 .6 8.5 1.7 2.5 1.1 4.6 2.7 6.1 4.7l-7.3 8.3c-2.1-2.4-4.5-3.5-7.3-3.5-1.9 0-3.4.4-4.6 1.3s-1.8 2-1.8 3.3c0 1.1.4 2 1.3 2.8s2.2 1.5 3.9 2.2c1.7.7 3.9 1.5 6.5 2.4 3.7 1.3 6.6 2.9 8.9 4.8 2.2 2 3.3 4.8 3.3 8.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path
        d="M67.3 90.9c0 9.2-5.4 14.7-14.2 14.7-8.1 0-12.7-4.4-15.1-9.5l9.4-5.8c1.5 2.6 3 4.6 5.8 4.6 3.1 0 5-1.5 5-6.7V48.5h9.1v42.4zm30.3 3.6c3.2 5.5 7.6 9.4 15.2 9.4 6.4 0 10.5-3.2 10.5-7.7 0-5.3-4.3-7.2-11.4-10.4-10.3-4.4-17-9.9-17-21.7 0-10.8 8.3-19.1 21.2-19.1 9.3 0 16 3.8 20.3 11.6l-9 5.8c-2.1-3.7-4.9-5.7-11.3-5.7-4.4 0-7.3 2.8-7.3 6.4 0 4.4 3 6.3 9.7 9.2 11.3 4.9 18.9 10.3 18.9 22.8 0 13.1-10.2 20.2-24.6 20.2-13.8 0-22.7-6.8-26.6-14.8l11.4-6z"
        fill="#000000"
      />
    </svg>
  );
}

export function TailwindLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function NodeLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z"
        fill="#339933"
      />
      <path
        d="M16 5.8l9.6 5.6v11.2L16 28.2l-9.6-5.6V11.4L16 5.8z"
        fill="#5FA04E"
      />
      <path
        d="M16 11.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GoLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#00ACD7" />
      <path
        d="M34 50c0-9 6-16 15-16 6 0 11 3 13 8l-6 3c-1-3-4-5-7-5-5 0-9 4-9 10s4 10 9 10c4 0 6-2 7-5h-8v-6h14v8c-3 5-8 9-14 9-9 0-15-7-15-16z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PythonLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 110 110" fill="none">
      <path
        d="M54.2 3.3c-24.9 0-23.4 10.8-23.4 10.8l.03 11.2h23.8v3.4H20.7S3.3 26.6 3.3 51.5c0 24.8 15.2 23.9 15.2 23.9h9.1v-12.7c0-14.6 12.6-14.2 12.6-14.2h23.8s11.8.2 11.8-11.4V14.7s1.8-11.4-21.6-11.4zm-13.1 7.2a3.8 3.8 0 110 7.6 3.8 3.8 0 010-7.6z"
        fill="#387EB8"
      />
      <path
        d="M55.8 106.7c24.9 0 23.4-10.8 23.4-10.8l-.03-11.2H55.4v-3.4h33.9s17.4 2.1 17.4-22.8c0-24.8-15.2-23.9-15.2-23.9h-9.1v12.7c0 14.6-12.6 14.2-12.6 14.2H46s-11.8-.2-11.8 11.4v22.4s-1.8 11.4 21.6 11.4zm13.1-7.2a3.8 3.8 0 110-7.6 3.8 3.8 0 010 7.6z"
        fill="#FFE052"
      />
    </svg>
  );
}

export function PostgreSQLLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#336791" />
      <path
        d="M64 24c-22.1 0-40 17.9-40 40 0 17.7 11.5 32.7 27.5 37.9 1.4.3 2.5-.6 2.5-1.4v-5.2c-11.1 2.4-13.5-5.4-13.5-5.4-1.8-4.6-4.4-5.8-4.4-5.8-3.6-2.5.3-2.4.3-2.4 4 .3 6.1 4.1 6.1 4.1 3.6 6.1 9.3 4.3 11.6 3.3.4-2.6 1.4-4.3 2.5-5.3-8.9-1-18.2-4.4-18.2-19.8 0-4.4 1.6-8 4.1-10.8-.4-1-.8-5.1.4-10.7 0 0 3.4-1.1 11.1 4.1 3.2-.9 6.7-1.3 10.1-1.3s6.9.5 10.1 1.3c7.7-5.2 11.1-4.1 11.1-4.1 2.2 5.6.8 9.7.4 10.7 2.6 2.8 4.1 6.4 4.1 10.8 0 15.4-9.3 18.7-18.3 19.7 1.4 1.2 2.7 3.6 2.7 7.3v10.8c0 .8 1.1 1.7 2.5 1.4C92.5 96.7 104 81.7 104 64c0-22.1-17.9-40-40-40z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function RedisLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#DC382D" />
      <path
        d="M40 45l24-14 24 14-24 14-24-14zm0 20l24 14 24-14v18l-24 14-24-14V65z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function MongoDBLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#47A248" />
      <path
        d="M64 22c-.6 0-1.2.2-1.7.5C59.7 24.3 42 38.8 42 66.5c0 18.4 10.7 31.6 20.4 39.1.5.4 1.1.6 1.6.6s1.1-.2 1.6-.6C75.3 98.1 86 84.9 86 66.5c0-27.7-17.7-42.2-20.3-44-.5-.3-1.1-.5-1.7-.5zm0 13c7.2 9.2 12 21.2 12 31.5 0 14-6.8 23.8-12 28.5V35z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function DockerLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#2496ED" />
      <path
        d="M106 58c-1.5-1-4.8-1-6.8-.2-1.4-5.3-6.2-9-11.8-9-1.2 0-2.3.2-3.4.6C81.6 42.8 73.8 38 65 38c-1.2 0-2.3.1-3.4.3-1.2-4.5-5.3-7.8-10.2-7.8-5.9 0-10.6 4.8-10.6 10.6 0 .5 0 1 .1 1.5C38.6 43 36 45.4 34.2 49H22c-2.2 0-4 1.8-4 4v16c0 14.3 11.7 26 26 26h38c18.8 0 34-15.2 34-34 0-1-.1-2-.2-3zM40 52h8v8h-8v-8zm12 0h8v8h-8v-8zm12 0h8v8h-8v-8zm-24 12h8v8h-8v-8zm12 0h8v8h-8v-8zm12 0h8v8h-8v-8zm12 0h8v8h-8v-8zm-24 12h8v8h-8v-8zm12 0h8v8h-8v-8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function KubernetesLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#326CE5" />
      <path
        d="M64 26l32.9 19v38L64 102 31.1 83V45L64 26zm0 12L41.5 51v26L64 90l22.5-13V51L64 38zm0 11l13 7.5v15L64 79l-13-7.5v-15L64 49z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function AWSLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#232F3E" />
      <path
        d="M36 62l6-20h6l6 20h-5l-1.5-5.5h-5L41 62h-5zm7.5-9.5h3.5L45.2 46l-1.7 6.5zm16.5 9.5l-4-20h5l2.5 13.5 3-13.5h4l3 13.5 2.5-13.5h5l-4 20h-5l-3-13.5L65 62h-5zm27.5.5c-4 0-7-2-8-5l4.5-2.5c.5 1.5 2 2.5 4 2.5 2 0 3-1 3-2s-1-1.5-3-2l-2-.5c-4-1-6-3-6-6 0-3.5 3-6 7-6 3.5 0 6 1.5 7 4l-4 2.5c-.5-1-1.5-2-3-2-1.5 0-2.5 1-2.5 2s1 1.5 2.5 2l2 .5c4 1 6.5 3 6.5 6.5 0 4-3 6-8 6z"
        fill="#FF9900"
      />
      <path
        d="M32 76c18 8 46 8 64 0 1.5-.7 3.5.5 2.5 2-15 11-53 11-68 0-1.2-.9.2-2.3 1.5-2z"
        fill="#FF9900"
      />
    </svg>
  );
}

export function GraphQLLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#E10098" />
      <path
        d="M64 24l34.6 20v40L64 104 29.4 84V44L64 24zm0 10.5L38.5 49.2v29.6L64 93.5l25.5-14.7V49.2L64 34.5z"
        fill="#FFFFFF"
      />
      <circle cx="64" cy="24" r="7" fill="#FFFFFF" />
      <circle cx="98.6" cy="44" r="7" fill="#FFFFFF" />
      <circle cx="98.6" cy="84" r="7" fill="#FFFFFF" />
      <circle cx="64" cy="104" r="7" fill="#FFFFFF" />
      <circle cx="29.4" cy="84" r="7" fill="#FFFFFF" />
      <circle cx="29.4" cy="44" r="7" fill="#FFFFFF" />
    </svg>
  );
}

export function FigmaLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

export function GitLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#F05032" />
      <path
        d="M93.3 58.7L69.3 34.7a6.6 6.6 0 00-9.3 0L52.8 42l11.7 11.7a7.9 7.9 0 0110 10l11.4 11.4c2.8-.8 6 .3 7.8 2.6a7.9 7.9 0 01-2.3 12.3 7.9 7.9 0 01-10-2.3c-1.8-2.3-2.3-5.5-1.2-8.3L69.5 66v18.7a7.9 7.9 0 11-6.6 0V64.6a7.9 7.9 0 01-4.3-10.4L47.1 42.7l-12.4 12.4a6.6 6.6 0 000 9.3l24 24a6.6 6.6 0 009.3 0l25.3-25.3a6.6 6.6 0 000-4.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LinuxLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#FCC624" />
      <path
        d="M64 28c-11 0-18 8-18 19 0 7 2 12 5 16-3 4-8 11-8 19 0 10 9 18 21 18s21-8 21-18c0-8-5-15-8-19 3-4 5-9 5-16 0-11-7-19-18-19zm-5 13a4 4 0 110 8 4 4 0 010-8zm10 0a4 4 0 110 8 4 4 0 010-8zm-5 5c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z"
        fill="#000000"
      />
    </svg>
  );
}

export function PrismaLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#2D3748" />
      <path
        d="M60.5 24.8a4 4 0 017 0l35.8 62a4 4 0 01-3.5 6h-71.6a4 4 0 01-3.5-6l35.8-62z"
        fill="#16A394"
      />
      <path
        d="M64 27l31.8 55H32.2L64 27z"
        fill="#5A67D8"
      />
    </svg>
  );
}

export function HTML5Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#E34F26" />
      <path d="M34 38l5.5 62L64 107l24.5-7L94 38H34zm46 16H51l1 10h27l-2 22-13 4-13-4-.7-8H40l1.4 15.5L64 97l22.6-6.5L89 54h-9z" fill="#FFFFFF" />
    </svg>
  );
}

export function CSS3Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#1572B6" />
      <path d="M34 38l5.5 62L64 107l24.5-7L94 38H34zm46 16H51l1 10h27l-2 22-13 4-13-4-.7-8H40l1.4 15.5L64 97l22.6-6.5L89 54h-9z" fill="#FFFFFF" />
    </svg>
  );
}

export function ReduxLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#764ABC" />
      <path
        d="M85 64c0 7-3 13.5-8 18-3.5 3-8 5-13 5-11 0-20-9-20-20s9-20 20-20c5 0 9.5 2 13 5 5 4.5 8 11 8 18zm-21-12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"
        fill="#FFFFFF"
      />
      <circle cx="64" cy="64" r="6" fill="#FFFFFF" />
    </svg>
  );
}

export function NginxLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#009639" />
      <path
        d="M44 38v52l12-7V51l28 39V38l-12 7v32L44 38z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function KafkaLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="56" fill="#231F20" />
      <path
        d="M44 46a8 8 0 100-16 8 8 0 000 16zm0 52a8 8 0 100-16 8 8 0 000 16zm40-26a8 8 0 100-16 8 8 0 000 16zm-33.5-6.5l26-10m-26 21l26 10M44 48v32"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BootstrapLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#7952B3" />
      <path
        d="M48 36h22.6c11.8 0 18.4 5.7 18.4 14.5 0 6.6-4.3 11.6-11.4 13.2v.5c8.6 1.4 13.9 7 13.9 15.2 0 10.7-8.2 16.6-21.3 16.6H48V36zm14.3 22.3h7.2c5.6 0 8.6-2.6 8.6-6.7 0-4.3-3.1-6.7-8.6-6.7h-7.2v13.4zm0 29.1h8.2c6.2 0 9.7-2.8 9.7-7.4 0-4.9-3.7-7.5-10-7.5h-7.9v14.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function VueLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M78.8 18L64 43.6 49.2 18H18l46 79.6L110 18H78.8z" fill="#41B883" />
      <path d="M78.8 18L64 43.6 49.2 18H35.6l28.4 49.2L92.4 18H78.8z" fill="#35495E" />
    </svg>
  );
}

export function LaravelLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#FF2D20" />
      <path
        d="M93.8 38.6l-16.7-9.7c-1.3-.8-2.9-.8-4.2 0l-16.7 9.7c-1.3.8-2.1 2.1-2.1 3.6v19.3c0 1.5.8 2.9 2.1 3.6l16.7 9.7c1.3.8 2.9.8 4.2 0l16.7-9.7c1.3-.8 2.1-2.1 2.1-3.6V42.2c0-1.5-.8-2.9-2.1-3.6zm-18.8 3.5l10.9 6.3-10.9 6.3-10.9-6.3 10.9-6.3zm-12.9 11l10.9 6.3v12.7l-10.9-6.3V53.1zm14.9 19v-12.7l10.9-6.3v12.7l-10.9 6.3zM54.8 62.6l-16.7-9.7c-1.3-.8-2.9-.8-4.2 0l-16.7 9.7c-1.3.8-2.1 2.1-2.1 3.6v19.3c0 1.5.8 2.9 2.1 3.6l16.7 9.7c1.3.8 2.9.8 4.2 0l16.7-9.7c1.3-.8 2.1-2.1 2.1-3.6V66.2c0-1.5-.8-2.9-2.1-3.6zm-18.8 3.5l10.9 6.3-10.9 6.3-10.9-6.3 10.9-6.3zm-12.9 11l10.9 6.3v12.7l-10.9-6.3V77.1zm14.9 19v-12.7l10.9-6.3v12.7l-10.9 6.3z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#18181B" />
      <path
        d="M32 44h22v8H41v10h11v8H41v14h13v8H32V44zm28 0h10l8.5 16.5L79 44h10l-13.5 24 14.5 24H79.5L70.5 75 61.5 92H51.5l14.5-24L51 44h9z"
        fill="#FFFFFF"
      />
      <circle cx="102" cy="88" r="4" fill="#68A063" />
    </svg>
  );
}

export function LumenLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#E24B2C" />
      <path
        d="M64 26c-4 14-18 24-18 40 0 13.2 9.8 24 22 24s22-10.8 22-24c0-10-6-20-13-27 2 6 0 13-4 17-2.5-12-3-20-9-30z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function RestApiLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#0071E3" />
      <path
        d="M36 50L22 64l14 14M92 50l14 14-14 14M72 38L56 90"
        stroke="#FFFFFF"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MySQLLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#00758F" />
      <path
        d="M34 82c12-3 20-12 24-20 6-12 14-22 28-26-8 8-10 18-9 28 1 8 4 14 11 18-8 1-16-1-22-6-4 8-12 14-22 16-3-3-6-6-10-10z"
        fill="#F29111"
      />
      <path
        d="M68 38c6 6 12 10 20 12-4-8-10-14-18-17l-2 5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function VercelLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#000000" />
      <path d="M64 34L100 94H28L64 34z" fill="#FFFFFF" />
    </svg>
  );
}

export function LaragonLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#0E83CD" />
      <path
        d="M42 36h14v38h32v14H42V36z"
        fill="#FFFFFF"
      />
      <circle cx="86" cy="46" r="8" fill="#FFFFFF" />
    </svg>
  );
}

export function VSCodeLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#007ACC" />
      <path
        d="M96 28.5L72.2 46.8 49.6 30 32 38.3v51.4l17.6 8.3 22.6-16.8L96 99.5c2.4 1.2 5.2-.5 5.2-3.2V31.7c0-2.7-2.8-4.4-5.2-3.2zM72.2 64L44.8 43.2l12.4-5.8 27.2 20-12.2 6.6zm0 0l12.2 6.6-27.2 20-12.4-5.8L72.2 64z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function NeonLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#00E599" />
      <path
        d="M38 86V42h13l36 38V42h13v44H87L51 48v38H38z"
        fill="#000000"
      />
    </svg>
  );
}

export function GitHubLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#181717" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 26C42.9 26 26 43.1 26 64.4c0 17 11 31.4 26.3 36.5 1.9.3 2.6-.8 2.6-1.8v-6.5c-10.6 2.3-12.8-5.1-12.8-5.1-1.7-4.4-4.2-5.6-4.2-5.6-3.5-2.4.3-2.3.3-2.3 3.8.3 5.9 4 5.9 4 3.4 5.9 8.9 4.2 11.1 3.2.3-2.5 1.3-4.2 2.4-5.2-8.5-1-17.4-4.3-17.4-19.1 0-4.2 1.5-7.7 4-10.4-.4-1-.18-4.9.4-10.2 0 0 3.2-1 10.6 4a36.4 36.4 0 0119.3 0c7.3-5 10.6-4 10.6-4 .6 5.3.2 9.2-.2 10.2 2.5 2.7 4 6.2 4 10.4 0 14.8-8.9 18.1-17.5 19 1.4 1.2 2.6 3.6 2.6 7.3v10.8c0 1 .7 2.2 2.6 1.8C91 95.8 102 81.4 102 64.4 102 43.1 85.1 26 64 26z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function AntigravityLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <defs>
        <linearGradient id="agy_grad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.5" stopColor="#8A2BE2" />
          <stop offset="1" stopColor="#00E599" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="28" fill="url(#agy_grad)" />
      <path
        d="M64 30L94 88H78L64 58 50 88H34L64 30z"
        fill="#FFFFFF"
      />
      <circle cx="64" cy="74" r="5" fill="#FFFFFF" />
    </svg>
  );
}



