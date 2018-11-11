export default class UniqueActionTypeGenerator {
  public static strictMode(isStrict: boolean) {
    this.isStrict = isStrict
  }

  public static generate(actionType: string, namespace?: string) {
    const type = namespace ? this.typeGenerator(actionType, namespace) : actionType
    if (this.isStrict && type in this.dict) {
      throw Error(`can not generate the same type. type name: ${type}`)
    }
    return this.presenter(type)
  }

  // dict
  private static dict: {[key: string]: number} = {}
  // 厳格モード。開発時はONにして同じactionを定義しないようにする
  private static isStrict = true
  private static presenter(type: string) {
    if (type in this.dict) {
      this.dict[type]++
    } else {
      this.dict[type] = 0
    }
    return `${type}_${this.dict[type]}`
  }
  private static typeGenerator(actionType: string, namespace: string) {
    return `${namespace.split('/').filter((item) => item !== '').join('/')}/${actionType}`
  }
}

// 名前長いので短命alias提供
export function generate(actionType: string, namespace?: string) {
  return UniqueActionTypeGenerator.generate(actionType, namespace)
}
