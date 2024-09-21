import { Outlet } from 'react-router-dom'
import { MainLayout } from 'supporting/layouts'

import { MainStructureTree } from 'widgets/mainStructureTree'

export const MainPage = () => {
  return (
    <MainLayout leftBar={<MainStructureTree />}>
      <Outlet />
    </MainLayout>
  )
}
