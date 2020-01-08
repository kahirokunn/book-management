import selector from '@/store/middleware/router/selector'
import { Vue } from 'vue-property-decorator'
export default class Router extends Vue {
    public location: ReturnType<typeof selector.location>
    public onChangeLocation(): void
}
