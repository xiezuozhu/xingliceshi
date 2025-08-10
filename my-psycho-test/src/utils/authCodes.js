// 授权码配置文件

// 预设的正确授权码数组
export const validAuthCodes = [
  'psycho2023',
  'test2023',
  'admin2023',
  'user2023',
  '123'
]

// 检查授权码是否有效
export function isValidAuthCode(inputCode) {
  return validAuthCodes.includes(inputCode)
}