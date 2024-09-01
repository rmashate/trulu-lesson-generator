"use client";

import React from 'react';
import Head from 'next/head';
import TruluGameGenerator from '../components/TruluGameGenerator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trulu Game Generator</title>
        <meta name="description" content="Generate personalized educational games with Trulu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TruluGameGenerator />
      </main>

      <footer className="text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Trulu. All rights reserved.
      </footer>
    </div>
  );
}