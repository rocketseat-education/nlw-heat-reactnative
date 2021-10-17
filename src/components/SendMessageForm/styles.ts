import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 184,
    backgroundColor: COLORS.BLACK_TERTIARY,
    paddingBottom: getBottomSpace() + 16,
    paddingTop: 16,
    paddingHorizontal: 24
  },
  input: {
    width: '100%',
    height: 88,
    textAlignVertical: 'top',
    color: COLORS.WHITE
  }
});