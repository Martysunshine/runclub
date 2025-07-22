import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}
