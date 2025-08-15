import FeaturePill from "./FeaturePill";

function IconUser() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V21h18v-1.5C21 16.5 17 14 12 14Z" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconGroup() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm10 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM2 20v-1c0-2.8 4-4.5 7-4.5s7 1.7 7 4.5v1H2Zm13 0v-1c0-1.7 2.6-3 5-3" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconChat() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12a7 7 0 0 1-7 7H7l-4 3V12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7Z" stroke="currentColor" strokeWidth="1.5"/></svg>);}

export default function Hero() {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-brand-600">Share Skills</span>, Build Community
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Connect with skilled individuals in your community. Learn new crafts,
          share your expertise, and join workshops that celebrate local traditions and modern skills.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <FeaturePill icon={<IconUser />} label="1-on-1 Sessions" />
          <FeaturePill icon={<IconGroup />} label="Group Workshops" />
          <FeaturePill icon={<IconChat />} label="Real-time Chat" />
        </div>
      </div>
    </section>
  );
}
