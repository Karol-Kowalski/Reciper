import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Product = list({
  //access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      }
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT'},
        { label: 'Waiting', value: 'WAITING'},
        { label: 'Accepted', value: 'ACCEPTED'},
        { label: 'Available', value: 'AVAILABLE'},
      ],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
  }
})