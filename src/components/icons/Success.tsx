import Image from 'next/image'

export function Success() {
  return (
    <div className="min-w-fit">
      <Image src="/success.gif" height={50} width={50} alt="success gif" />
    </div>
  )
}
