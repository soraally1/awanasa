'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Section {
  id: string;
  title: string;
  content: string;
}

export default function AwanasaGDD() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      id: 'overview',
      title: 'Game Summary',
      content: `
        <h3 class="text-2xl font-bold mb-4">AWANASA</h3>
        <p class="mb-4 italic">BEEFEST - GACCI 2025 Game Design Competition</p>
        
        <h4 class="text-xl font-semibold mb-3">Description</h4>
        <p class="mb-4">Awanasa adalah game platformer naratif aksi yang memadukan visual puzzle, rythm game, Kamera visual manipulation, dan card-based time mechanics, dengan sentuhan immersive gameplay melalui sistem audio 8D. Pemain akan menjadi Awan, seorang pelukis buta warna yang mencoba memperbaiki masa lalunya menggunakan "Kartu Foto" yang dihasilkan oleh Kamera Polaroid untuk kembali ke masa lalu.</p>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Genre</h4>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Narrative Puzzle</li>
          <li>Rhythm Game</li>
          <li>Time-Travel Adventure</li>
          <li>Emotional Story-Rich</li>
          <li>Art-based Exploration</li>
          <li>Card Manipulation</li>
        </ul>
        
        <h4 class="text-xl font-semibold mb-2">Technical Details</h4>
        <p class="mb-2"><strong>Dimension:</strong> 3D</p>
        <p class="mb-2"><strong>Camera:</strong> First Person</p>
        <p class="mb-2"><strong>Platform:</strong> VR, PC</p>
        <p class="mb-2"><strong>Mode:</strong> Single Player</p>
        <p class="mb-4"><strong>Languages:</strong> Bahasa Indonesia, English, Japanese</p>
      `
    },
    {
      id: 'story',
      title: 'Story & Characters',
      content: `
        <h3 class="text-2xl font-bold mb-4">Story Synopsis</h3>
        <p class="mb-4">Di masa depan, seorang pria bernama Awan hidup dengan penyesalan mendalam. Ia kehilangan Rasa, wanita yang paling ia cintai, karena sikap dingin dan ketidakpeduliannya. Awan kini hidup dalam kesendirian, dibayangi trauma dan rasa bersalah. Skizofrenia dan buta warna yang ia derita menjadikan hidupnya kian suram.</p>
        
        <p class="mb-4">Suatu hari, Awan menemukan kamera polaroid yang ditinggalkan Rasa bersama sebuah surat. Kamera ini adalah jembatan waktu—setiap foto yang diambil menjadi kartu waktu yang memungkinkannya kembali ke masa lalu untuk memperbaiki kesalahan dan menyelamatkan Rasa.</p>
        
        <h4 class="text-xl font-semibold mb-3 mt-6">Main Characters</h4>
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row gap-4 items-start">
            <img src="/awanasa/awan 30.png" alt="Awan 30 Tahun" class="w-full sm:w-64 h-auto object-contain rounded" />
            <div>
              <p class="font-bold mb-1">Awan (30 Tahun)</p>
              <p class="text-sm">Pelukis yang mengidap buta warna dan skizofrenia setelah kepergian istrinya. Hidupnya dipenuhi kesunyian dan penyesalan.</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 items-start">
            <img src="/awanasa/Awan 25.png" alt="Awan 25 Tahun" class="w-full sm:w-64 h-auto object-contain rounded" />
            <div>
              <p class="font-bold mb-1">Awan (25 Tahun)</p>
              <p class="text-sm">Setelah kembali ke masa lalu, kepribadiannya berubah total—dari dingin menjadi hangat, terbuka, dan perhatian.</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 items-start">
            <img src="/awanasa/Rasa.png" alt="Rasa" class="w-full sm:w-64 h-auto object-contain rounded" />
            <div>
              <p class="font-bold mb-1">Rasa</p>
              <p class="text-sm">Sosok yang mencintai Awan dengan sepenuh hati. Meski tubuhnya rapuh oleh leukemia, ia tetap tegar dan tidak ingin Awan terbebani.</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 items-start">
            <img src="/awanasa/udin.png" alt="Udin" class="w-full sm:w-64 h-auto object-contain rounded" />
            <div>
              <p class="font-bold mb-1">Udin (Kucing Oren)</p>
              <p class="text-sm">Kucing lokal yang hadir saat hari paling sepi Awan. Memiliki kemampuan merasakan kesedihan dan kecemasan.</p>
            </div>
          </div>
          <div>
            <p class="font-bold mb-1">Waktu</p>
            <p class="text-sm">Penjaga alur waktu yang marah karena Awan dan Rasa mengutak-atik timeline. Muncul sebagai boss akhir.</p>
          </div>
        </div>
      `
    },
    {
      id: 'gameplay',
      title: 'Gameplay & Mechanics',
      content: `
        <h3 class="text-2xl font-bold mb-4">Core Loop</h3>
        <img src="/awanasa/12.png" alt="Core Loop" class="w-full max-w-3xl h-auto object-contain rounded mb-4" />
        
        <h4 class="text-xl font-semibold mb-3 mt-6">Key Mechanics</h4>
        
        <div class="space-y-6 mb-6">
          <div>
            <p class="font-bold mb-2">Time Travel</p>
            <img src="/awanasa/travel.png" alt="Time Travel Mechanic" class="w-full max-w-2xl h-auto object-contain rounded" />
          </div>
          
          <div>
            <p class="font-bold mb-2">Time Freeze Puzzle</p>
            <img src="/awanasa/time frezee.png" alt="Time Freeze Mechanic" class="w-full max-w-2xl h-auto object-contain rounded" />
          </div>
          
          <div>
            <p class="font-bold mb-2">Flick Mechanism</p>
            <img src="/awanasa/flick mecchanism.png" alt="Flick Mechanism" class="w-full max-w-2xl h-auto object-contain rounded" />
          </div>
          
          <div>
            <p class="font-bold mb-2">Rhythm Game</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <img src="/awanasa/3124.png" alt="Rhythm Game 1" class="w-full sm:w-1/2 h-auto object-contain rounded" />
              <img src="/awanasa/4213.png" alt="Rhythm Game 2" class="w-full sm:w-1/2 h-auto object-contain rounded" />
            </div>
          </div>
          
          <div>
            <p class="font-bold mb-2">Polaroid Mechanism Proof Test</p>
            <video controls class="w-full max-w-2xl h-auto rounded">
              <source src="/awanasa/1018.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div>
            <p class="font-bold mb-2">Smash Polaroid Photo Example</p>
            <video controls class="w-full max-w-2xl h-auto rounded">
              <source src="/awanasa/1019.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <h4 class="text-xl font-semibold mb-2">Additional Features</h4>
        <ul class="list-disc list-inside mb-4 space-y-2 text-sm">
          <li><strong>8D Spatial Audio:</strong> Audio immersive 360° yang menyesuaikan rotasi kepala</li>
          <li><strong>VR Hand Tracking:</strong> Interaksi natural dengan gesture tangan</li>
        </ul>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">VR Controls</h4>
        <p class="mb-2 text-sm"><strong>Move:</strong> Joystick kiri</p>
        <p class="mb-2 text-sm"><strong>Look:</strong> Headset tracking</p>
        <p class="mb-2 text-sm"><strong>Grab:</strong> Trigger button</p>
        <p class="mb-2 text-sm"><strong>Camera Hold:</strong> Grip button</p>
        <p class="mb-2 text-sm"><strong>Shutter:</strong> B button</p>
        <p class="mb-4 text-sm"><strong>Time Travel:</strong> Double pinch atau joystick kanan+kiri</p>
      `
    },
    {
      id: 'chapters',
      title: '6 Chapters',
      content: `
        <h3 class="text-2xl font-bold mb-4">Chapter Design</h3>
        
        <div class="space-y-6">
          <div class="border-l-4 border-purple-500 pl-4">
            <h4 class="text-xl font-bold mb-2">Chapter 1: Pagi</h4>
            <p class="text-sm mb-3"><strong>Location:</strong> Rumah Awan (Masa Depan) - berantakan dan suram</p>
            
            <p class="text-sm font-semibold mb-2">Gameplay:</p>
            <ul class="list-disc list-inside mb-3 text-sm space-y-1 ml-2">
              <li><strong>Awal Gelap & Audio 8D:</strong> Ruangan gelap gulita dengan suara detik jam berputar 360°</li>
              <li><strong>Bangun dari Tidur:</strong> Interaksi visual membuka mata, melepaskan selimut</li>
              <li><strong>Rutinitas Pagi:</strong> Membuat kopi dan menyiapkan roti (opsional, melatih kontrol)</li>
              <li><strong>Menemukan Kamera Polaroid:</strong> Di belakang tumpukan box berdebu</li>
              <li><strong>Kanvas & Polaroid:</strong> Menggambar dengan siluet bantu, memotret lukisan</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Mechanics:</p>
            <ul class="list-disc list-inside text-sm space-y-1 ml-2">
              <li>Immersive Audio 8D</li>
              <li>Object Interaction (grab, pour, drag)</li>
              <li>Polaroid Mechanic (foto sebagai bridge waktu)</li>
              <li>Flick PhotoCard Mechanic</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-pink-500 pl-4">
            <h4 class="text-xl font-bold mb-2">Chapter 2: Svara Rasa</h4>
            <p class="text-sm mb-3"><strong>Location:</strong> Rumah Awan (Masa Lalu) - rapi dan hangat</p>
            
            <p class="text-sm font-semibold mb-2">Gameplay:</p>
            <ul class="list-disc list-inside mb-3 text-sm space-y-1 ml-2">
              <li><strong>Kenangan di Kanvas:</strong> Menggambar siluet Rasa dengan sketch outline</li>
              <li><strong>Time Travel:</strong> Double pinch pada foto → transisi putih → masuk masa lalu</li>
              <li><strong>Cutscene Emosional:</strong> Bertemu Rasa, Awan menangis & memeluknya</li>
              <li><strong>Pilihan Dialog:</strong> Menjelaskan (pingsan) atau Senyum (ajakan bernyanyi)</li>
              <li><strong>Transisi Musikal Disney:</strong> Lingkungan berubah lebih berwarna dengan musik</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Mini-game: Melody of Memories</p>
            <ul class="list-disc list-inside text-sm space-y-1 ml-2">
              <li><strong>String Flick:</strong> Memetik garis cahaya sesuai ritme</li>
              <li><strong>Polaroid Beat Capture:</strong> Memotret pada timing tertentu</li>
              <li><strong>Dancing:</strong> Memegang tangan Rasa dan berdansa</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="text-xl font-bold mb-2">Chapter 3: Taman</h4>
            <p class="text-sm mb-3"><strong>Location:</strong> Taman Kota - bersih, nyaman, sejuk</p>
            
            <p class="text-sm font-semibold mb-2">Gameplay:</p>
            <ul class="list-disc list-inside mb-3 text-sm space-y-1 ml-2">
              <li><strong>Awal:</strong> Terbangun di rumah (dapat melihat 1/4 warna), melukis kenangan, time travel ke taman</li>
              <li><strong>Konflik:</strong> Tiga kejadian buruk muncul satu per satu</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Tiga Kejadian yang Harus Diperbaiki:</p>
            <ol class="list-decimal list-inside text-sm space-y-2 ml-2 mb-3">
              <li><strong>Pohon Apel Jatuh:</strong> Angin kencang menjatuhkan apel. Waktu melambat → capture semua apel agar tidak mengenai Rasa</li>
              <li><strong>Bekal Kosong:</strong> Tempat bekal tertukar dan kosong. Time stop → menggambar makanan mengikuti siluet → foto → wujudkan → taruh di bekal</li>
              <li><strong>Kucing Menyebrang:</strong> Sekawanan kucing ingin menyebrang. Slow motion → capture kucing sebelum tertabrak kendaraan</li>
            </ol>
            
            <p class="text-sm font-semibold mb-2">Mechanics:</p>
            <ul class="list-disc list-inside text-sm space-y-1 ml-2">
              <li><strong>Polaroid Time Stop:</strong> Shutter → dunia berhenti → perbaiki masalah → shutter lagi</li>
              <li><strong>Painting Into Reality:</strong> Menggambar → foto → flick kartu</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-red-500 pl-4">
            <h4 class="text-xl font-bold mb-2">Chapter 4: Rasa</h4>
            <p class="text-sm mb-3"><strong>Location:</strong> Rumah Awan (Masa Lalu) - rapi dan nyaman</p>
            
            <p class="text-sm font-semibold mb-2">Gameplay:</p>
            <ul class="list-disc list-inside mb-3 text-sm space-y-1 ml-2">
              <li><strong>Perspektif Berubah:</strong> Pemain menjadi Rasa (dapat melihat 2/4 warna)</li>
              <li><strong>Flashback Interaktif:</strong> Usaha Rasa mengubah sikap Awan yang dingin</li>
              <li><strong>Time Looping:</strong> Terjebak dalam waktu berulang, mencoba terus menerus</li>
              <li><strong>Main Gameplay:</strong> Puzzle menyambung warna sesuai emosi Awan</li>
              <li><strong>Konflik:</strong> Setiap puzzle selesai, waktu semakin lambat hingga terhenti</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Second Gameplay:</p>
            <ul class="list-disc list-inside text-sm space-y-1 ml-2 mb-3">
              <li>Waktu marah: "Aku akan mengambil kembali, apa yang telah kau lakukan"</li>
              <li>Rasa menulis surat (player mengikuti siluet tulisan)</li>
              <li>Menaruh kamera Polaroid dan surat di box</li>
              <li>Ada batas waktu sebelum Waktu menghukum Rasa</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Mechanics:</p>
            <ul class="list-disc list-inside text-sm space-y-1 ml-2">
              <li><strong>Fail Emotion Break:</strong> Puzzle dengan 6 objective, 4 tipe emosi, 24 waktu dunia</li>
              <li>Puzzle hancur dan pecah kembali setelah selesai</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-yellow-500 pl-4">
            <h4 class="text-xl font-bold mb-2">Chapter 5: Amarah Waktu</h4>
            <p class="text-sm mb-3"><strong>Location:</strong> Ruang Waktu - serba putih, mencekam, detik waktu mengelilingi</p>
            
            <p class="text-sm font-semibold mb-2">Gameplay:</p>
            <ul class="list-disc list-inside mb-3 text-sm space-y-1 ml-2">
              <li><strong>Opening:</strong> Terbangun (dapat melihat 3/4 warna), menemukan kunci, melukis, time travel</li>
              <li><strong>Waktu bergerak cepat:</strong> Partikel membawa ke ruang waktu</li>
              <li><strong>Dual Character Control:</strong> Bergantian mengendalikan Awan dan Rasa</li>
              <li><strong>Boss Appearance:</strong> Waktu muncul sebagai jam besar dengan wajah retak</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Boss Fight - 3 Phases:</p>
            <div class="ml-2 space-y-2 text-sm">
              <div>
                <p class="font-semibold">Phase 1 - Serangan Dan Pertahanan:</p>
                <ul class="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Objective 1-2:</strong> Waktu melempar pecahan jarum jam. Foto projectile → hancurkan kartu foto → projectile hancur</li>
                  <li><strong>Objective 3-4:</strong> Foto Waktu → hancurkan kartu foto → Waktu terkena damage</li>
                  <li>Bergantian antara Awan dan Rasa</li>
                </ul>
              </div>
              
              <div>
                <p class="font-semibold">Phase 2 - Kelemahan:</p>
                <ul class="list-disc list-inside ml-4 space-y-1">
                  <li>Kekuatan Waktu melemah, retakan pada jarum dan kaca</li>
                  <li>Foto dan lempar kartu foto untuk damage lebih besar</li>
                  <li>Sambil menghindari projectile</li>
                </ul>
              </div>
              
              <div>
                <p class="font-semibold">Phase 3 - Musik:</p>
                <ul class="list-disc list-inside ml-4 space-y-1">
                  <li>Waktu melemah, permainan lebih lambat</li>
                  <li>Foto inti jam yang terbuka (membekukan)</li>
                  <li>Musik theater dimulai dengan kartu foto kenangan buruk muncul</li>
                  <li>Hancurkan 24 kartu foto sesuai nada musik</li>
                  <li>Waktu berhenti setelah semua kartu dihancurkan</li>
                </ul>
              </div>
            </div>
            
            <p class="text-sm font-semibold mb-2 mt-3">Ending:</p>
            <p class="text-sm ml-2">Boss runtuh → Gembok Waktu terlempar → Awan menangkap → Awan & Rasa berpelukan → Jam pasir muncul</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h4 class="text-xl font-bold mb-2">Chapter 6: Akhir Perasaan</h4>
            <p class="text-sm mb-3"><strong>Location:</strong> Rumah Sakit - bersih, BGM mellow, ambient sfx</p>
            
            <p class="text-sm font-semibold mb-2">Gameplay:</p>
            <ul class="list-disc list-inside mb-3 text-sm space-y-1 ml-2">
              <li><strong>Opening:</strong> Terbangun (dapat melihat semua warna), menggambar lukisan terakhir, memotret</li>
              <li><strong>Time Travel:</strong> Kembali ke masa lalu tapi bukan kamar biasa → rumah sakit penuh kesunyian</li>
              <li><strong>Menemui Rasa:</strong> Rasa terdiam dengan wajah pucat, tatapan kosong, penyakit yang dialami</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Emotion Decision Gameplay:</p>
            <ul class="list-disc list-inside text-sm space-y-1 ml-2 mb-3">
              <li>Menemukan highlight untuk mencari kunci</li>
              <li>Mainkan emotion decision: mengambil warna emosi untuk diberikan kepada Rasa</li>
              <li>Setelah berhasil → mendapat kunci</li>
            </ul>
            
            <p class="text-sm font-semibold mb-2">Pilihan Akhir:</p>
            <div class="ml-2 space-y-2 text-sm">
              <div>
                <p class="font-semibold">❌ Tidak Membuka Kunci:</p>
                <p class="ml-4">Tetap pada takdir yang ada, merelakan kepergian Rasa</p>
              </div>
              <div>
                <p class="font-semibold">✅ Membuka Kunci:</p>
                <p class="ml-4">Merubah takdir, mengembalikan jiwa Rasa yang terkunci dalam gembok. Pergi ke masa lalu → buka gembok di rumah sakit → jiwa Rasa kembali → Rasa sembuh → hidup bahagia sebagai pasangan yang melawan takdir</p>
              </div>
            </div>
            
            <p class="text-sm font-semibold mb-2 mt-3">Mechanics:</p>
            <ul class="list-disc list-inside text-sm space-y-1 ml-2">
              <li><strong>Emotion Puzzle:</strong> 2 objective yang menggambarkan 2 takdir berbeda</li>
              <li>Menaruh emosi sesuai tempatnya untuk mendapatkan kunci</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'art',
      title: 'Art & Audio',
      content: `
        <h3 class="text-2xl font-bold mb-4">Visual & Audio Design</h3>
        <p class="mb-4">Visual atmosferik dengan transisi waktu sinematik. Pemain awalnya tidak dapat melihat warna (buta warna), namun setiap chapter mengembalikan warna secara bertahap.</p>
        
        <h4 class="text-xl font-semibold mb-3 mt-6">Environments</h4>
        
        <div class="space-y-6 mb-6">
          <div>
            <p class="font-bold mb-2">Rumah Awan (Masa Depan)</p>
            <img src="/awanasa/RoomAfter.png" alt="Rumah Masa Depan" class="w-full max-w-3xl h-auto object-contain rounded" />
          </div>
          
          <div>
            <p class="font-bold mb-2">Rumah Awan (Masa Lalu)</p>
            <img src="/awanasa/Room.png" alt="Rumah Masa Lalu" class="w-full max-w-3xl h-auto object-contain rounded" />
          </div>
          
          <div>
            <p class="font-bold mb-2">Rumah Sakit</p>
            <img src="/awanasa/rs.png" alt="Rumah Sakit" class="w-full max-w-3xl h-auto object-contain rounded" />
          </div>
          
          <div>
            <p class="font-bold mb-2">Ruang Waktu</p>
            <img src="/awanasa/rt.png" alt="Ruang Waktu" class="w-full max-w-3xl h-auto object-contain rounded" />
          </div>
        </div>
        
        <h4 class="text-xl font-semibold mb-3 mt-6">Prototypes</h4>
        
        <div class="mb-6">
          <p class="font-bold mb-2">Voice Over Prototype</p>
          <div class="aspect-video w-full max-w-3xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/pgW01dJwocI" 
              title="Voice Over Prototype" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              class="rounded"
            ></iframe>
          </div>
        </div>
        
        <div class="mb-4">
          <p class="font-bold mb-2">Dancing Song Prototype</p>
          <div class="aspect-video w-full max-w-3xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/V4kZtfd35D0" 
              title="Dancing Song Prototype" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              class="rounded"
            ></iframe>
          </div>
        </div>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Audio</h4>
        <p class="mb-3 text-sm"><strong>8D Spatial Audio:</strong> Sistem audio immersive 360° yang menyesuaikan rotasi headset.</p>
        <p class="mb-2 text-sm"><strong>Music:</strong> Sekali Ini Saja, Rhythm Game tracks, Multiple BGM</p>
        <p class="mb-4 text-sm"><strong>Voice Cast:</strong> Awan (Daffa Kumara), Rasa (Dirda Divina), Udin & Waktu (Daffa Kumara)</p>
      `
    },
    {
      id: 'audience',
      title: 'Target Audience',
      content: `
        <h3 class="text-2xl font-bold mb-4">Target Customer</h3>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Psikografi</h4>
        <p class="mb-3 text-sm">Pemain menghargai estetika visual kuat, cerita mendalam, mekanisme unik. Penggemar game indie naratif seperti SuperHot, Firewatch, ViewFinder, It Takes Two, Journey, Portal, The Witness.</p>
        
        <p class="mb-2 text-sm"><strong>Motivasi (Quantic Foundry):</strong></p>
        <ul class="list-disc list-inside mb-4 ml-4 space-y-1 text-sm">
          <li>Immersion & Fantasy</li>
          <li>Challenge</li>
          <li>Expression</li>
        </ul>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Game References</h4>
        <ul class="list-disc list-inside mb-4 space-y-1 text-sm">
          <li><strong>SuperHot:</strong> Time manipulation</li>
          <li><strong>ViewFinder:</strong> Photo-based reality</li>
          <li><strong>Life is Strange:</strong> Time rewind & decisions</li>
        </ul>
      `
    },
    {
      id: 'monetization',
      title: 'Business Model',
      content: `
        <h3 class="text-2xl font-bold mb-4">Monetization Strategy</h3>
        
        <h4 class="text-xl font-semibold mb-2">Pricing</h4>
        <div class="mb-4 text-sm space-y-1">
          <p><strong>Base Game:</strong> Rp99.000</p>
          <p><strong>DLC 1 - Akhir Indah Bersamamu:</strong> Rp29.000</p>
          <p><strong>DLC 2 - Udin Si Kucing Manis:</strong> Rp29.000</p>
          <p><strong>DLC 3 - Ruang Waktu Terhenti:</strong> Rp49.000</p>
          <p><strong>DLC 4 - Buah Hati Awanasa:</strong> Rp49.000</p>
          <p><strong>Complete Edition Bundle:</strong> Rp199.000</p>
        </div>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Distribution</h4>
        <p class="mb-4 text-sm">Steam Store, Oculus Store, Meta Quest Platform</p>
        
        <h4 class="text-xl font-semibold mb-2">Revenue Strategy</h4>
        <ul class="list-disc list-inside mb-4 space-y-1 text-sm">
          <li>No Microtransactions - fokus naratif</li>
          <li>DLC Episodes untuk kelanjutan cerita</li>
          <li>Early Access & Free Demo</li>
          <li>Seasonal Promotions (Steam Sale)</li>
        </ul>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Sales Projection (3 Years)</h4>
        <p class="mb-1 text-sm"><strong>Year 1:</strong> Rp248.000.000</p>
        <p class="mb-1 text-sm"><strong>Year 2:</strong> Rp337.300.000</p>
        <p class="mb-4 text-sm"><strong>Year 3:</strong> Rp476.200.000</p>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Marketing</h4>
        <p class="mb-1 text-sm"><strong>Year 1:</strong> Early Access, Demo, Komunitas VR Indonesia</p>
        <p class="mb-1 text-sm"><strong>Year 2:</strong> Influencer campaign, Steam Sale</p>
        <p class="mb-4 text-sm"><strong>Year 3:</strong> Festival game indie</p>
      `
    },
    {
      id: 'credits',
      title: 'Credits & Info',
      content: `
        <h3 class="text-2xl font-bold mb-4">Project Information</h3>
        
        <h4 class="text-xl font-semibold mb-2">Competition</h4>
        <p class="mb-4 text-sm">BEEFEST - GACCI 2025 Game Design Competition<br/>By Game Application and Technology BINUS University</p>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Creator</h4>
        <p class="mb-4 text-sm"><strong>Daffa Kumara Seta Rahmasina</strong><br/>XII PPLG 2<br/>SMK Negeri 8 Semarang</p>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Voice Acting</h4>
        <p class="mb-1 text-sm"><strong>Awan:</strong> Daffa Kumara Seta Rahmasina</p>
        <p class="mb-1 text-sm"><strong>Rasa:</strong> Dirda Divina Marir Farrandena</p>
        <p class="mb-1 text-sm"><strong>Udin:</strong> Daffa Kumara Seta Rahmasina</p>
        <p class="mb-4 text-sm"><strong>Waktu:</strong> Daffa Kumara Seta Rahmasina</p>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Music & Audio</h4>
        <p class="mb-4 text-sm">Original music and voice recording created with BandLab Studio</p>
        
        <h4 class="text-xl font-semibold mb-2 mt-6">Special Thanks</h4>
        <p class="mb-4 text-sm">This game design document was created for the BEEFEST - GACCI 2025 competition. Thank you to all who supported this project.</p>
      `
    }
  ];

  const currentSection = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <Image 
              src="/awanasa/awanasa.png" 
              alt="AWANASA Logo" 
              width={120} 
              height={120}
              className="mb-4"
            />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden mb-6 w-full p-3 flex items-center justify-between text-black"
        >
          <span className="font-semibold text-lg">{currentSection.title}</span>
          <svg
            className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mb-6 p-4">
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left py-2 transition-all ${
                      activeSection === section.id
                        ? 'text-black font-bold'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Desktop Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-1">
            <nav className="sticky top-24">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left py-2 text-sm transition-all ${
                        activeSection === section.id
                          ? 'text-black font-bold'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-4">
            <div className="bg-white">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-black leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentSection.content }}
                />
              </div>

            </div>

            {/* Navigation Footer */}
            <div className="mt-12 pt-8 flex justify-between gap-8">
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex(s => s.id === activeSection);
                  if (currentIndex > 0) {
                    setActiveSection(sections[currentIndex - 1].id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                disabled={sections.findIndex(s => s.id === activeSection) === 0}
                className="text-gray-600 hover:text-black font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm"
              >
                ← Previous
              </button>
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex(s => s.id === activeSection);
                  if (currentIndex < sections.length - 1) {
                    setActiveSection(sections[currentIndex + 1].id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                className="text-gray-600 hover:text-black font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm"
              >
                Next →
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
