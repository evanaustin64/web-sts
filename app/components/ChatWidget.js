'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const BubbleChat = dynamic(
  () => import('flowise-embed-react').then((mod) => mod.BubbleChat),
  { ssr: false }
);

export default function ChatWidget({ botRef }) {
  useEffect(() => {
    if (botRef) {
      botRef.current = {
        open: () => {
          const btn = document.querySelector('.flowise-chatbot-button');
          if (btn) btn.click();
        },
      };
    }
  }, [botRef]);

  return (
    <BubbleChat
      chatflowid="597fb194-977d-4405-913f-62899dbb5716"
      apiHost="https://cloud.flowiseai.com"
      theme={{
        button: {
          backgroundColor: '#1a56db',
          right: -9999, // sembunyikan bubble button asli
          bottom: -9999,
          size: 48,
          iconColor: 'white',
        },
        chatWindow: {
          title: 'CS PT. Samudra',
          welcomeMessage: 'Halo! Ada yang bisa kami bantu? 😊',
          backgroundColor: '#ffffff',
          height: 500,
          width: 350,
        },
      }}
    />
  );
}