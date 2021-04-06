import { select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Recipe = list({
  // TODO add access
  fields: {
    name: text({ isRequired: true }),
    decription: text({
      ui: {
        displayMode: 'textarea',
      }
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT'},
        { label: 'waiting', value: 'WAITING'},
        { label: 'accepted', value: 'ACCEPTED'},
        { label: 'Private', value: 'PRIVATE'},
      ],
      defaultValue: 'Draft',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    // TODO photo
  }
});