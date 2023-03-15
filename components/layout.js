import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div className="absolute flex flex-col w-full h-full font-bold text-lg">
            <Head>
                <title>FilePlayer</title>
                <link rel="icon" type="image/x-icon" href="favicon.png" />
            </Head>
            {children}
        </div>
    );
}
