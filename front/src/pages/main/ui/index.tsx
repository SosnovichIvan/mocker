import { StructureTree } from 'components/structureTree'
import { Outlet } from 'react-router-dom'
import { MainLayout } from 'supporting/layouts'

export const MainPage = () => {
  return (
    <MainLayout leftBar={<StructureTree />}>
      <Outlet />
    </MainLayout>
  )
}
