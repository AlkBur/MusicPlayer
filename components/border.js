export const BorderH = () => (
    <div
        className="w-full h-1 bg-slate-700"
        style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "1px solid rgba(0,0,0,0.4)",
        }}
    ></div>
);

export const BorderV = () => (
    <div
        className="h-full w-1 bg-slate-700"
        style={{
            borderLeft: "1px solid rgba(255,255,255,0.1)",
            borderRight: "1px solid rgba(0,0,0,0.4)",
        }}
    ></div>
);
