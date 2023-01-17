import Image from 'next/image'
import eclipseOne from '../../public/images/eclipse-1.png'
import eclipseTwo from '../../public/images/eclipse-2.png'
import eclipseThree from '../../public/images/eclipse-3.png'
import clsxm from '../../utils/clsxm'

export default function MovingGradient({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'alternate'
}) {
  if (variant === 'default') {
    return (
      <div className={clsxm('relative', className)}>
        <Image
          src={eclipseTwo}
          alt="eclipse"
          className="absolute  -top-20 -right-20 animate-blob2"
          placeholder="blur"
        />
        <Image
          src={eclipseThree}
          alt="eclipse"
          className="absolute left-0 animate-blob3"
          placeholder="blur"
        />
        <Image
          src={eclipseOne}
          alt="eclipse"
          className="absolute -top-20 -left-20 animate-blob"
          placeholder="blur"
        />
      </div>
    )
  }
  return (
    <div className={clsxm('relative', className)}>
      <Image
        src={eclipseTwo}
        alt="eclipse"
        className="absolute -top-20 -right-20 animate-blob3"
        placeholder="blur"
      />
      <Image
        src={eclipseOne}
        alt="eclipse"
        className="absolute -top-20 -left-20 animate-blob2"
        placeholder="blur"
      />
      <Image
        src={eclipseThree}
        alt="eclipse"
        className="absolute left-0 top-48 animate-blob"
        placeholder="blur"
      />
    </div>
  )
}
