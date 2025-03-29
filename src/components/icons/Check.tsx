import Image from 'next/image'

export function Check({ className }: { className?: string }) {
  return (
    <Image
      src="/check.svg"
      height={16}
      width={16}
      alt="icon check"
      className={className}
    />
  )
}
