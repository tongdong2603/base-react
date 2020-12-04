import * as slice from './slice';
import saga from './saga';

export const { add } = slice.actions;
export { saga };
export default slice.reducer;
