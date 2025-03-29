export function Accordion() {
  return (
    <details className="mx-auto w-[90%] max-w-5xl rounded-lg border p-3">
      <summary className="cursor-pointer font-bold text-neutral-200">
        Sobre o projeto
      </summary>
      <div className="mt-3 space-y-4 text-neutral-400 transition-opacity duration-300">
        <p>
          Este projeto foi desenvolvido para oferecer planos de assinatura
          adaptáveis às necessidades de diferentes perfis de usuários, desde
          iniciantes até empresas. Com uma interface moderna e intuitiva, ele
          facilita a escolha do melhor plano, proporcionando clareza sobre os
          benefícios incluídos.
        </p>
        <p>
          A plataforma conta com a possibilidade de alternância entre pagamento
          mensal e anual, garantindo flexibilidade e transparência nos valores.
          Além disso, cada plano vem com um conjunto exclusivo de recursos,
          desde acesso a workshops até suporte especializado para empresas.
        </p>
        <p>
          Criado com <strong>React</strong> e estilizado com{' '}
          <strong>TailwindCSS</strong>, o projeto é totalmente responsivo e
          otimizado para diferentes dispositivos, proporcionando uma experiência
          fluida tanto no desktop quanto no mobile.
        </p>
      </div>
    </details>
  )
}
