'use client'

import { ReactNode, useState } from 'react'
import { Check } from './icons/Check'
import { ArrowRight } from './icons/ArrowRight'
import { Play } from './icons/Play'
import clsx from 'clsx'
import { Success } from './icons/Success'

export function PlansCard() {
  const [applyDiscount, setApplyDiscount] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="my-12 flex flex-col items-center justify-center sm:mx-12">
      <div className="max-w-fit rounded-lg border">
        <button
          onClick={() => setApplyDiscount(false)}
          className={clsx('px-6 py-1', {
            'bg-primary rounded-md border text-yellow-500': !applyDiscount,
          })}
        >
          Mensal
        </button>
        <button
          onClick={() => setApplyDiscount(true)}
          className={clsx('px-6 py-1', {
            'bg-primary rounded-md border text-yellow-500': applyDiscount,
          })}
        >
          Anual (20% de desconto)
        </button>
      </div>
      <div className="mx-auto my-10 flex w-full max-w-5xl flex-col items-center gap-4 overflow-x-auto sm:flex-row">
        <Hobby withDiscount={applyDiscount} setSelectedPlan={setSelectedPlan} />
        <Pro withDiscount={applyDiscount} setSelectedPlan={setSelectedPlan} />
        <Company
          withDiscount={applyDiscount}
          setSelectedPlan={setSelectedPlan}
        />
      </div>

      {selectedPlan && (
        <Modal
          plan={selectedPlan}
          modality={applyDiscount ? 'anual' : 'mensal'}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  )
}

function Modal({
  plan,
  onClose,
  modality,
}: {
  plan: string
  modality?: 'mensal' | 'anual'
  onClose: () => void
}) {
  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="flex w-[92%] max-w-2xl flex-col rounded-lg bg-neutral-900 p-6 text-white shadow-lg">
        <div className="flex items-center space-x-5">
          <Success />
          <div>
            <h2 className="mb-3 text-2xl font-bold">Plano escolhido</h2>
            <p className="mt-2 text-lg">
              Você escolheu o plano{' '}
              <span className="font-bold text-yellow-400">{plan}</span> na
              modalidade{' '}
              <span className="font-bold text-yellow-400">{modality}</span>.
              Agora pode aproveitar todos os benefícios!
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 ml-auto max-w-fit rounded-md bg-indigo-600 px-4 py-2 font-bold uppercase"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

function CardWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-[330px] rounded-xl border p-3">
      <div className="bg-primary rounded-xl border px-6 py-10">{children}</div>
    </div>
  )
}

function Title({ title }: { title: string }) {
  return <h1 className="font-indie text-xl text-yellow-500">{title}</h1>
}

function Price({ price, monthly }: { price: number; monthly: boolean }) {
  return (
    <p className="mt-2 text-3xl font-bold">
      {price > 0
        ? new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(price)
        : 'Grátis'}
      {monthly && <span className="text-base">/mês</span>}
    </p>
  )
}

function Divider() {
  return <div className="my-3 w-full border-t" />
}

function Features({ title, features }: { title: string; features: string[] }) {
  return (
    <section className="my-5">
      <h2 className="mb-3 text-lg font-bold">{title}:</h2>
      <ul className="flex flex-col space-y-2">
        {features.map((feat, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2" />
            <span className="text-xs">{feat}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Button({
  label,
  Icon,
  onClick,
}: {
  label: string
  Icon: ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-md bg-indigo-600 p-2 font-bold uppercase"
    >
      {Icon}
      {label}
    </button>
  )
}

function Hobby({
  withDiscount,
  setSelectedPlan,
}: {
  withDiscount: boolean
  setSelectedPlan: (plan: string) => void
}) {
  const price = 0
  const finalPrice = Math.floor((withDiscount ? price * 0.8 : price) * 10) / 10

  return (
    <CardWrapper>
      <Title title="Só por Hobby" />
      <Price price={finalPrice} monthly={false} />
      <Divider />
      <Features
        title="Incluso"
        features={[
          '100 mini projetos para resolver',
          '1 workshop gratuito',
          '10+ APIS para acesso de requests',
        ]}
      />
      <Button
        label="Continuar"
        Icon={<ArrowRight />}
        onClick={() => setSelectedPlan('Só por Hobby')}
      />
    </CardWrapper>
  )
}

function Pro({
  withDiscount,
  setSelectedPlan,
}: {
  withDiscount: boolean
  setSelectedPlan: (plan: string) => void
}) {
  const price = 29.9
  const finalPrice = Math.floor((withDiscount ? price * 0.8 : price) * 10) / 10

  return (
    <CardWrapper>
      <Title title="Plano Pro" />
      <Price price={finalPrice} monthly />
      <Divider />
      <Features
        title="Tudo do plano grátis e mais"
        features={[
          '1000 mini projetos para resolver',
          'Comunidade exclusiva para dúvidas',
          '40 workshops atualizados para assistir',
        ]}
      />
      <Button
        label="Comece agora"
        Icon={<Play />}
        onClick={() => setSelectedPlan('Plano Pro')}
      />
    </CardWrapper>
  )
}

function Company({
  withDiscount,
  setSelectedPlan,
}: {
  withDiscount: boolean
  setSelectedPlan: (plan: string) => void
}) {
  const price = 49.9
  const finalPrice = Math.floor((withDiscount ? price * 0.8 : price) * 10) / 10

  return (
    <CardWrapper>
      <Title title="Empresas" />
      <Price price={finalPrice} monthly />
      <Divider />
      <Features
        title="Tudo do plano grátis e mais"
        features={[
          'Assessoria exclusiva para dúvidas',
          'Criação de plano de estudos',
          'Lives semanais de novas tecnologias',
        ]}
      />
      <Button
        label="Comece agora"
        Icon={<Play />}
        onClick={() => setSelectedPlan('Empresas')}
      />
    </CardWrapper>
  )
}
