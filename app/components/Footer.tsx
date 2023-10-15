import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-300 pt-5">
      <div className="bg-gray-100 text-gray-600 py-10">
      <div className="container mt-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center md:text-left">
            <h5 className="font-bold">Información de Contacto</h5>
            <p>
              Teléfono:{" "}
              <a
                href="https://wa.me/message/72HUXVW3IQHYC1"
                className="md:text-gray-800 text-[#01b774]  md:hover:text-[#01b774]"
              >
                (+54) 9 11 3004-6330
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:Tradlaser@gmail.com" className="text-[#01b774] md:text-gray-800 md:hover:text-[#01b774]">
                Tradlaser@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center">
            <h5 className="font-bold">Enlaces Rápidos</h5>
            <ul className="list-none">
              <li>
                <Link href="/about" className="text-[#01b774] md:text-gray-800 md:hover:text-[#01b774]">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#01b774] md:text-gray-800 md:hover:text-[#01b774]">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h5 className="font-bold">Síguenos en Redes Sociales</h5>
            <ul className="list-none flex justify-center items-center">
              <li className="m-5">
                <a
                  href="https://wa.me/message/72HUXVW3IQHYC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 transition "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#01b774] md:text-gray-800 md:hover:text-[#01b774]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </li>
              <li className="m-5">
                <a
                  href="https://www.facebook.com/TrAdLaser/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-sky-400 transition "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#01b774] md:text-gray-800 md:hover:text-[#01b774]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
