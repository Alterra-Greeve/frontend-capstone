import useAuth from '@/lib/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * 
 * Component untuk ngeproteksi route yang memerlukan autentikasi
 * di cek dari session yang ada di custom hook useAuth
 * kalau sudah authenticated, maka boleh akses route yang diproteksi
 * kalau belum, maka di redirect ke halaman login
 * 
 */

export default function ProtectedRoutes() {
  const { session } = useAuth();

  return session === "authenticated"
    ? <Outlet />
    : <Navigate to="/auth/login" />
}