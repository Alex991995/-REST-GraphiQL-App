import { describe, expect, vi, it, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import SignOut from '../components/signOutButton/signOut.component';
import { renderWithProviders } from '../utils/test-redux';
// import { useSignOut } from 'react-firebase-hooks/auth';
// import userEvent from '@testing-library/user-event'
// import { auth } from '../utils/firebaseConfig';

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
}));

// vi.mock('react-firebase-hooks/auth', () => ({
//   useSignOut: vi.fn(() => [vi.fn()])
// }));

describe('SignIn Component', () => {
  beforeEach(() => {
    vi.mock('next/navigation', () => ({
      useRouter: () => ({
        replace: vi.fn(),
      }),
      usePathname: () => '/ru',
    }));
  });

  it('should render SignOut Component with the correct link and text', () => {
    const text = 'Выйти';

    renderWithProviders(<SignOut text={text} />);
    const buttonLink = screen.getByRole('button', { name: /выйти/i });
    expect(buttonLink).toBeInTheDocument();
  });

  // it('should be called function SignOut in SignOut Component', async  () => {
  //   const mockOut = vi.fn()
  //   const text = 'Выйти';
  //   const useSignOutMock = useSignOut as Mock;
  //   useSignOutMock.mockReturnValue([mockOut]);
  //   const user = userEvent.setup()

  //   renderWithProviders(<SignOut  text={text} />);
  //   const buttonLink = screen.getByRole('button', {name: /выйти/i})
  //   await user.click(buttonLink)

  //   expect(useSignOutMock).toHaveBeenCalled()
  // })
});
