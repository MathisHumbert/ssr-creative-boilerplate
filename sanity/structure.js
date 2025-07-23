import {singletonDocumentListItem} from 'sanity-plugin-singleton-tools'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {DocumentsIcon} from '@sanity/icons'

export const structure = (S, context) => {
  return (
    S.list()
      .title('Boilerplate')
      // singleton
      .items([
        singletonDocumentListItem({
          S,
          context,
          type: 'home',
          title: 'Home',
          id: 'home',
        }),
        S.divider(),
        // repeatables
        orderableDocumentListDeskItem({
          S,
          context,
          type: 'work',
          title: 'Work Individual',
          icon: DocumentsIcon,
        }),
        S.divider(),
        // settings
        singletonDocumentListItem({
          S,
          context,
          type: 'settings',
          title: 'Settings',
          id: 'settings',
        }),
      ])
  )
}
