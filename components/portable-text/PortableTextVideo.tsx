'use client'

import { type PortableTextComponentProps } from '@portabletext/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Card } from '@sanity/ui'
import { clsxm } from '@zolplay/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { ClientOnly } from '~/components/ClientOnly'
import { Commentable } from '~/components/Commentable'

export function PortableTextVideo({
  value,
}: PortableTextComponentProps<{
  _key: string
  url: string | undefined
  title: string
  source: string
}>) {
  const [isZoomed, setIsZoomed] = React.useState(false)

  const hasLabel = React.useMemo(
    () => typeof value.title === 'string' && value.title.length > 0,
    [value.title]
  )

  if (!value.url) {
    return <Card padding={4}>Missing Video URL</Card>
  }

  return (
    <div data-blockid={value._key} className="group relative pr-3 md:pr-0">
      <ClientOnly>
        <Commentable className="z-30" blockId={value._key} />
      </ClientOnly>

      <Dialog.Root open={isZoomed} onOpenChange={setIsZoomed}>
        <AnimatePresence>
          {!isZoomed && (
            <div
              className={clsxm(
                'w-full rounded-2xl bg-zinc-100  dark:bg-zinc-800',
                hasLabel ? 'p-2' : 'px-2 pt-2'
              )}
            >
              <motion.div className="relative">
                <Dialog.Trigger className="relative z-20 w-full cursor-zoom-in rounded-xl pt-[56.25%] dark:brightness-75 dark:transition-[filter] dark:hover:brightness-100">
                  <iframe
                    style={{
                      height: '100%',
                      width: '100%',
                      border: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                    className="rounded-xl"
                    src={
                      value.source === 'bilibili'
                        ? `${value.url}&autoplay=0`
                        : value.url
                    }
                    title={value.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Dialog.Trigger>
              </motion.div>
              {hasLabel && (
                <span className="flex w-full items-center justify-center text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {value.title}
                </span>
              )}
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isZoomed && (
            <Dialog.Portal forceMount>
              <Dialog.Close className="fixed inset-0 z-50 flex h-screen w-screen cursor-zoom-out items-center justify-center">
                {/* Overlay */}
                <Dialog.Overlay asChild>
                  <motion.div
                    className="absolute inset-0 bg-black/50"
                    initial={{ opacity: 0, backdropFilter: 'blur(0)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0)' }}
                  />
                </Dialog.Overlay>

                <Dialog.Content className="w-full overflow-hidden">
                  <div className="relative flex aspect-[3/2] items-center justify-center">
                    <div className="relative flex aspect-[3/2] w-full max-w-7xl items-center">
                      <motion.div
                        layoutId={`image_${value._key}`}
                        className="absolute inset-0"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                          duration: 0.5,
                        }}
                      >
                        <iframe
                          style={{
                            height: '100%',
                            width: '100%',
                            border: 0,
                          }}
                          src={`${value.url}?autoplay=0`}
                          title={value.title}
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </motion.div>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Close>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </div>
  )
}