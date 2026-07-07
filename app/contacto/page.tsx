import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactPage() {

  return (

    <main
      className="
        min-h-screen
        bg-[#F8F8F8]
        pt-40
        pb-28
      "
    >

      <section>

        <div className="mx-auto flex w-full justify-center">

          <div
            className="
              w-full
              max-w-[1500px]
              px-6

              lg:px-10
            "
          >

            {/* ====================================== */}
            {/* HEADER */}
            {/* ====================================== */}

            <div className="text-center">

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.45em]
                  text-[#C9A14A]
                "
              >
                CONTACTO
              </span>

              <h1
                className="
                  mt-6

                  text-5xl
                  font-light
                  tracking-[-0.05em]
                  text-[#111111]

                  lg:text-7xl
                "
              >
                ¿Hablamos?
              </h1>

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-[760px]

                  text-lg
                  leading-9
                  text-neutral-500
                "
              >
                Llámanos, escríbenos por WhatsApp o
                envíanos un correo electrónico.
                Estaremos encantados de ayudarte a
                encontrar la propiedad perfecta.
              </p>

            </div>
                        {/* ====================================== */}
            {/* CONTENIDO */}
            {/* ====================================== */}

            <div
              className="
                mt-24

                grid
                gap-14

                lg:grid-cols-2
                lg:items-center
              "
            >

              {/* ====================================== */}
              {/* INFORMACIÓN */}
              {/* ====================================== */}

              <div>

                {/* Teléfono */}

                <a
                  href="tel:+34828917481"
                  className="
                    mb-8
                    flex
                    items-center
                    gap-6

                    rounded-[28px]
                    border
                    border-black/5
                    bg-white
                    p-8

                    shadow-[0_20px_60px_rgba(0,0,0,.05)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_30px_70px_rgba(0,0,0,.08)]
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C9A14A]/10
                      text-[#C9A14A]
                    "
                  >

                    <Phone size={30} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">

                      Teléfono

                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[#111111]">

                      828 91 74 81

                    </h3>

                  </div>

                </a>

                {/* WhatsApp */}

                <a
                  href="https://wa.me/34615227309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mb-8
                    flex
                    items-center
                    gap-6

                    rounded-[28px]
                    border
                    border-black/5
                    bg-white
                    p-8

                    shadow-[0_20px_60px_rgba(0,0,0,.05)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_30px_70px_rgba(0,0,0,.08)]
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C9A14A]/10
                      text-[#C9A14A]
                    "
                  >

                    <MessageCircle size={30} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">

                      WhatsApp

                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[#111111]">

                      +34 615 22 73 09

                    </h3>

                  </div>

                </a>
                                {/* Email */}

                <a
                  href="mailto:info@ay-bra.com"
                  className="
                    flex
                    items-center
                    gap-6

                    rounded-[28px]
                    border
                    border-black/5
                    bg-white
                    p-8

                    shadow-[0_20px_60px_rgba(0,0,0,.05)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_30px_70px_rgba(0,0,0,.08)]
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C9A14A]/10
                      text-[#C9A14A]
                    "
                  >

                    <Mail size={30} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">

                      Email

                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[#111111]">

                      info@ay-bra.com

                    </h3>

                  </div>

                </a>

              </div>

              {/* ====================================== */}
              {/* GOOGLE MAPS */}
              {/* ====================================== */}

              <div>

                <div
                  className="
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-black/5
                    bg-white
                    p-3

                    shadow-[0_20px_60px_rgba(0,0,0,.05)]
                  "
                >

                  <iframe
                    title="AY&BRA Inmobiliaria"
                    src="https://www.google.com/maps?q=Calle+Guayasen+4,+35460+G%C3%A1ldar,+Las+Palmas&output=embed"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="
                      h-[500px]
                      w-full
                      rounded-[24px]
                    "
                  />

                </div>

              </div>

            </div>
                      </div>

        </div>

      </section>

    </main>

  );

}