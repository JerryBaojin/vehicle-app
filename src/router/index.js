import Vue from 'vue'
import Router from 'vue-router'

//登录页面
const Login = () => import('@/views/login/login');
//首页
const Home = () => import('@/views/home/home');
//功能菜单页面
//const Menu = () => import('@/views/menu/menu');
import Menu from '@/views/menu/menu';
//预警提醒页面
//const Warning = () => import('@/views/warning/warning');
import Warning from '@/views/warning/warning';
//公务用车申请页面
const OfficalVehicle = () => import('@/views/officialVehicle/officialVehicle');
//生产用车申请页面
const ProductionVehicle = () => import('@/views/productionVehicle/productionVehicle');
//申请记录页面
const ApplicationRecord = () => import('@/views/applicationRecord/applicationRecord');
//公务用车申请记录页面
//const OfficialRecord = () => import('@/views/officialRecord/officialRecord');
//生产用车申请记录页面
//const ProductionRecord = () => import('@/views/productionRecord/productionRecord');
//公务用车记录详情
const OfficialDetail = () => import('@/views/officialDetail/officialDetail');
//生产用车记录详情
const ProductionDetail = () => import('@/views/productionDetail/productionDetail');
//用车审批页面
const VehicleApproval = () => import('@/views/vehicleApproval/vehicleApproval');
//用车审批详情
const VehicleDetail = () => import('@/views/vehicleDetail/vehicleDetail');
//车辆调度
const VehicleScheduling = () => import('@/views/vehicleScheduling/vehicleScheduling');
//调度详情
const SchedulingDetail = () => import('@/views/schedulingDetail/schedulingDetail');
//手动调度
const ManualScheduling = () => import('@/views/manualScheduling/manualScheduling');
//归队登记页面
const Registration = () => import('@/views/registration/registration');
//归队登记详情
const RegistrationDetail = () => import('@/views/registrationDetail/registrationDetail');
//用车服务评价
const Evaluate = () => import('@/views/evaluate/evaluate');
//用车服务评价详情
const EvaluateDetail = () => import('@/views/evaluateDetail/evaluateDetail');
//三勤三检页面
const DiligentFrugal = () => import('@/views/diligentFrugal/diligentFrugal');
//三勤三检新增页面
const DiligentFrugalAdd = () => import('@/views/diligentFrugalAdd/diligentFrugalAdd');
//三勤三检详情
const DiligentFrugalDetail = () => import('@/views/diligentFrugalDetail/diligentFrugalDetail');
//加油信息页面
const Refueling = () => import('@/views/refueling/refueling');
//加油信息录入
const RefuelingAdd = () => import('@/views/refuelingAdd/refuelingAdd');
//加油信息详情
const RefuelingDetail = () => import('@/views/refuelingDetail/refuelingDetail');
//维修信息页面
const Maintenance = () => import('@/views/maintenance/maintenance');
//维修信息录入
const MaintenanceAdd = () => import('@/views/maintenanceAdd/maintenanceAdd');
//维修信息详情
const MaintenanceDetail = () => import('@/views/maintenanceDetail/maintenanceDetail');
//保养信息页面
const Upkeep = () => import('@/views/upkeep/upkeep');
//保养信息录入
const UpkeepAdd = () => import('@/views/upkeepAdd/upkeepAdd');
//保养信息详情
const UpkeepDetail = () => import('@/views/upkeepDetail/upkeepDetail');
//选择地址页面
const MapView = () => import('@/views/mapView/mapView');


Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
}

var router = new Router({
//	mode: 'history',
  routes: [
  	{
			path: '/',
			redirect: '/login'
		},
		{
    	path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
      	path: '/home',
	      name: 'menu',
	      component: Menu,
      },{
      	path: '/warning',
	      name: 'warning',
	      component: Warning,
      }]
    },
    {
    	path: '/officalVehicle',
      name: 'officalVehicle',
      component: OfficalVehicle,
    },
    {
    	path: '/productionVehicle',
      name: 'productionVehicle',
      component: ProductionVehicle,
    }, 
    {
    	path: '/applicationRecord',
      name: 'applicationRecord',
      component: ApplicationRecord,
//    redirect: '/officialRecord',
//    children: [{
//    	path: '/officialRecord',
//	      name: 'officialRecord',
//	      component: OfficialRecord,
//    },{
//    	path: '/productionRecord',
//	      name: 'productionRecord',
//	      component: ProductionRecord,
//    }]
   	},
   	{
    	path: '/officialDetail',
      name: 'officialDetail',
      component: OfficialDetail,
    },
   	{
    	path: '/productionDetail',
      name: 'productionDetail',
      component: ProductionDetail,
    },  
    {
    	path: '/vehicleApproval',
      name: 'vehicleApproval',
      component: VehicleApproval,
    }, 
    {
    	path: '/vehicleDetail',
      name: 'vehicleDetail',
      component: VehicleDetail,
    }, 
    {
    	path: '/vehicleScheduling',
      name: 'vehicleScheduling',
      component: VehicleScheduling,
    }, 
    {
    	path: '/schedulingDetail',
      name: 'schedulingDetail',
      component: SchedulingDetail,
    }, 
    {
    	path: '/manualScheduling',
      name: 'manualScheduling',
      component: ManualScheduling,
    },
    {
    	path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
    	path: '/registrationDetail',
      name: 'registrationDetail',
      component: RegistrationDetail,
    },
    {
    	path: '/evaluate',
      name: 'evaluate',
      component: Evaluate,
    },
    {
    	path: '/evaluateDetail',
      name: 'evaluateDetail',
      component: EvaluateDetail,
    },
    {
    	path: '/diligentFrugal',
      name: 'diligentFrugal',
      component: DiligentFrugal,
    },
    {
    	path: '/diligentFrugalAdd',
      name: 'diligentFrugalAdd',
      component: DiligentFrugalAdd,
    },
    {
    	path: '/diligentFrugalDetail',
      name: 'diligentFrugalDetail',
      component: DiligentFrugalDetail,
    },
    {
    	path: '/refueling',
      name: 'refueling',
      component: Refueling,
    },
    {
    	path: '/refuelingAdd',
      name: 'refuelingAdd',
      component: RefuelingAdd,
    },
    {
    	path: '/refuelingDetail',
    	name: 'refuelingDetail',
    	component: RefuelingDetail,
    },
    {
    	path: '/maintenance',
    	name: 'maintenance',
    	component: Maintenance,
    },
    {
    	path: '/maintenanceAdd',
    	name: 'maintenanceAdd',
    	component: MaintenanceAdd
    },
    {
    	path: '/maintenanceDetail',
    	name: 'maintenanceDetail',
    	component: MaintenanceDetail
    },
    {
    	path: '/upkeep',
    	name: 'upkeep',
    	component: Upkeep
    },
    {
    	path: '/upkeepAdd',
    	name: 'upkeepAdd',
    	component: UpkeepAdd
    },
    {
    	path: '/upkeepDetail',
    	name: 'upkeepDetail',
    	component: UpkeepDetail
    },
    {
    	path: '/mapView',
    	name: 'mapView',
    	component: MapView
    }
  ]
})

//项目路由守卫
router.beforeEach((to, from, next) => {	
	let keeps = router.app.$options.store.state.needKeep.split(',');
	let initKeeps = 'home,menus,warning,vehicleApproval,applicationRecord,vehicleScheduling,registration,evaluate,diligentFrugal,refueling,maintenance,upkeep';
	if(from.name == 'menu' && to.name != 'warning') {
//		console.log('这是从meun进来的')
		if(keeps.indexOf(to.name) != -1) {
//			console.log('heheheheh')
			keeps.splice(keeps.indexOf(to.name), 1);
			keeps = keeps.join(',');
			router.app.$options.store.dispatch('upDataNeedKeep',keeps);
		}
	}	else if(keeps != initKeeps) {
//		console.log('这是重新初始化缓存')
		router.app.$options.store.dispatch('upDataNeedKeep',initKeeps);
	}	
	router.app.$options._base.nextTick(()=> {
		next();
	})	
})

export default router;
