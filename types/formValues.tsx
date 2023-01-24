export interface FormValues {
  event_id: string
  team_name: string
  university: string
  amount: string
  // "members": {
  //   batch: string,
  //   email: string,
  //   identity_id: string,
  //   major: string,
  //   name: string,
  //   phone: string,
  // }[]
  'members[0][batch]': string
  'members[0][email]': string
  'members[0][identity_id]': string
  'members[0][major]': string
  'members[0][name]': string
  'members[0][phone]': string
  'members[1][batch]': string
  'members[1][email]': string
  'members[1][identity_id]': string
  'members[1][major]': string
  'members[1][name]': string
  'members[1][phone]': string
  'members[2][batch]': string
  'members[2][email]': string
  'members[2][identity_id]': string
  'members[2][major]': string
  'members[2][name]': string
  'members[2][phone]': string
  'members[3][batch]': string
  'members[3][email]': string
  'members[3][identity_id]': string
  'members[3][major]': string
  'members[3][name]': string
  'members[3][phone]': string
  'members[4][batch]': string
  'members[4][email]': string
  'members[4][identity_id]': string
  'members[4][major]': string
  'members[4][name]': string
  'members[4][phone]': string
  transfer_receipt: string
  identity_card: string
  student_card: string
}
