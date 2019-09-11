import Meta from '@/router/meta'
import { MENU_MODEL_TOPOLOGY } from '@/dictionary/menu-symbol'

import { SYSTEM_MODEL_GRAPHICS } from '@/dictionary/auth'

export const OPERATION = {
    SYSTEM_MODEL_GRAPHICS
}

export default {
    name: MENU_MODEL_TOPOLOGY,
    path: 'all/topology',
    component: () => import('./index.old.vue'),
    meta: new Meta({
        menu: {
            i18n: '模型拓扑'
        },
        auth: {
            operation: Object.values(OPERATION),
            authScope: 'global'
        }
    })
}
