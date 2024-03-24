'use client'

import { FC, useState } from 'react'
import { useDependencies } from '@/dependenciesContext'

const LoginPage: FC = () => {
  const { authService } = useDependencies()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const user = await authService.login(email, password)
      console.log('ログイン 成功! ユーザー:', user)
    } catch (error) {
      console.error('ログイン エラー:', error)
    }
  }

  return (
    <>
      <h2>ログイン ページ</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleLogin}
      >
        ログイン
      </button>
    </>
  )
}

export default LoginPage
