import DashboardContent from '../../components/Dashboard/Content'
import DashboardMenu from '../../components/Dashboard/Menu'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <DashboardMenu />
      <DashboardContent />
    </div>
  )
}

export default Dashboard
