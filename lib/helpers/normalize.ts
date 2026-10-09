const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const normalize = (value?: string | null) => {
  const email = (value ?? '').normalize('NFKC').trim().toLowerCase()

  return EMAIL_PATTERN.test(email) ? email : ''
}
