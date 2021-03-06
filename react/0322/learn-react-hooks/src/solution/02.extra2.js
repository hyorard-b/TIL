import { useState, useEffect } from 'react'

const { localStorage: storage } = window

/* -------------------------------------------------------------------------- */

export default function GreetingEmail({ initialEmail = 'yamoo9@euid.dev' }) {
  const [email, setEmail] = useState(
    () => storage.getItem('email') ?? initialEmail
  )

  useEffect(
    () => {
      storage.setItem('email', email)
    },
    // 의존성 배열 설정
    [email]
  )

  const handleChange = (e) => setEmail(e.target.value)
  const handleFocus = (e) => e.target.select()

  return (
    <div>
      <form>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={email}
          onFocus={handleFocus}
        />
      </form>
      <p>
        {email ? `입력된 이메일: ${email}` : '당신의 이메일을 입력해주세요.'}
      </p>
    </div>
  )
}
