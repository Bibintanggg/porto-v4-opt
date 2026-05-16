import SectionLabel from "@/src/utils/sectionLabel";

export default function SectionStory() {
  return (
    <section className="scroll-reveal mb-12">
      <SectionLabel>My Story</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
          
            Perjalanan saya di dunia programming dimulai dari [cerita awal kamu
            — misalnya: iseng bikin website waktu SMA, atau penasaran gimana
            aplikasi favorit dibuat]. Dari sana, saya mulai belajar secara
            otodidak dan tidak bisa berhenti.
          </p>
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            Saya tertarik ke full stack karena ingin punya kontrol penuh atas
            produk yang saya bangun — mulai dari database schema sampai animasi
            di frontend. Setiap layer punya tantangan tersendiri yang saya
            nikmati.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            Saat ini saya menjalani kuliah Matematika sambil terus aktif
            mengerjakan project dan freelance. Saya percaya kombinasi berpikir
            analitis dari matematika dengan kreativitas engineering menghasilkan
            solusi yang lebih baik.
          </p>
          <p className="text-[13.5px] font-light leading-[1.9] text-stone-500 dark:text-stone-400">
            Di luar layar, saya [sebutkan hobi atau minat kamu — misalnya: suka
            dengerin musik, main game, baca artikel tech, atau olahraga]. Saya
            percaya ide terbaik sering datang saat sedang istirahat.
          </p>
        </div>
      </div>
    </section>
  );
}
