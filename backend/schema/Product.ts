import { select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Product = list({
  //access:
  fields: {
    name: text({isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      }
    }),
    status: select({
      options: [
        { label: 'draft', value: 'DRAFT'},
        { label: 'waiting', value: 'WAITING'},
        { label: 'accepted', value: 'ACCEPTED'},
        { label: 'available', value: 'AVAILABLE'},
      ],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
  }
})