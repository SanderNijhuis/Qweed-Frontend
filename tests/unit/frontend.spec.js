import LocalStorageService from '@/services/LocalStorageService'

describe('LocalStorage', () => {
  it('Checks if user can be stored and retrieved', () => {
    const user = 'test_string'
    LocalStorageService.setUser(user);
    const retrieved_user = LocalStorageService.getUser();
    expect(retrieved_user).toMatch(user)
  })
})
