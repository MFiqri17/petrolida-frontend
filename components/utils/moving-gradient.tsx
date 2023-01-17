import Image from 'next/image'
import eclipseOne from '../../public/images/eclipse-1.png'
import eclipseTwo from '../../public/images/eclipse-2.png'
import eclipseThree from '../../public/images/eclipse-3.png'
import clsxm from '../../utils/clsxm'

export default function MovingGradient({ className }: { className?: string }) {
  return (
    <div className={clsxm('relative', className)}>
      <Image
        src={eclipseTwo}
        alt="eclipse"
        className="absolute  -top-20 -right-20 animate-blob2"
      />
      <Image
        src={eclipseThree}
        alt="eclipse"
        className="absolute left-0 animate-blob3"
      />
      <Image
        src={eclipseOne}
        alt="eclipse"
        className="absolute -top-20 -left-20 animate-blob"
      />
    </div>
  )
}
