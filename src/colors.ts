import { ColorProps, EffectsProps, backgroundColors, effects, fontColors, Reset } from './model'

function addColor(text: string, color: keyof ColorProps, isBackground = false): string {
  if (isBackground) {
    return text + backgroundColors[color]
  }
  return text + fontColors[color]
}

function getEffects(effectList: (keyof EffectsProps)[]): string {
  return effectList.map(effect => effects[effect]).join('')
}

export type ColorOptionsProps = {
  font?: keyof ColorProps
  background?: keyof ColorProps
  effects?: (keyof EffectsProps)[]
}

export function color(text: string, options: ColorOptionsProps): string {
  const preparedText = text.replace(/ё/g, 'е')
  let result = ''
  if (options) {
    if (options.font) {
      result = addColor(result, options.font)
    }
    if (options.background) {
      result = addColor(result, options.background, true)
    }
    if (options.effects) {
      result += getEffects(options.effects)
    }
    result += preparedText
    result += Reset
    return result
  }
  return preparedText
}
