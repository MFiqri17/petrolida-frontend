export interface FormValues {
  event_id: string
  team_name: string
  university: string
  amount: string
  members: {
    batch: string
    email: string
    identity_id: string
    major: string
    name: string
    phone: string
  }[]
  transfer_receipt: string
  identity_card: string
  student_card: string
}

export interface FormValues2 {
  event_id: string
  team_name: string
  university: string
  amount: string
  transfer_receipt: string
  identity_card: string
  student_card: string
}
