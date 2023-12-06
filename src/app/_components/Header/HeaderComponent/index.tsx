import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import claases from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={[claases.header]}>
      <Gutter>
        <Link href="/">
          <img src="/common/logo.svg" alt="Logo" />
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
