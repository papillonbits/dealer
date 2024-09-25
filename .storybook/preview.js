import { getStorybookPreviewSetup } from '@papillonbits/setup/storybook/previewSetup'

const storybookPreviewSetup = getStorybookPreviewSetup({
  parameters: {
    a11y: true,
    decorators: true,
    docs: true,
    rootAttributesDefaults: true,
  },
})

export const parameters= storybookPreviewSetup.parameters
export const tags = ['autodocs']

localStorage.clear()
