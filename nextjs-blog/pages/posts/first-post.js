import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Script from 'next/script';
export default function FirstPost(){


    return (
        <>
        <Layout>
        <head>
            <title>First Post</title>
        </head>
       
        <h1>First Post </h1>
        
        <h2>

            <Link href="/">Back to Home</Link>
        </h2>
        </Layout>
        </>


    );
}