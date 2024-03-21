"use client"
import React from 'react'

import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '../../../../payload/payload-types'
import { CMSLink } from '../../Link'
import { Email } from '../../Blocks/Form/Email'
import { useForm } from 'react-hook-form'
import { FormBlock } from '../../Blocks/Form'

const FooterComponent = ({ footer }: { footer: Footer }) => {
    const pathname = usePathname()
    const navItems = footer?.navItems || [];

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
        <Gutter >
            <div className={classes.inclusions}>
                <div className={classes.leftContainer}>
                    <Link
                    href="/"
                    >
                        <Image src='./levenue-logo.svg' width={150} height={50} alt='Levenue' />
                    </Link>
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.newsletter}>
                        
                    </div>
                    <div className={classes.footerNav}>
                        {navItems.map(({ link }, i) => {
                        return <CMSLink key={i} {...link} appearance="none" />
                        })}
                    </div>
                </div>
            </div>
            <div className={classes.meta}>
                <ul className={classes.socialLinks}>
                </ul>
                <span>{footer.copyright}</span>
            </div>
        </Gutter>
    </footer>
  )
}

export default FooterComponent