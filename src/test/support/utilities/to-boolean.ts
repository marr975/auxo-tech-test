/**
 * A function to convert as string into a boolean value
 * Use 'true', 'True' or '1'
 * @param param0 { value: string }
 * @returns
 */
export function toBoolean({ value }: { value: string }): boolean {
  const truthy: Array<string> = ['true', 'True', '1']
  return truthy.includes(value)
}
