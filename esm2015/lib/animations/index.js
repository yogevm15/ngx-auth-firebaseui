import { animate, animateChild, animation, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
const customAnimation = animation([
    style({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
export const NgxAuthFirebaseuiAnimations = [
    trigger('animate', [transition('void => *', [useAnimation(customAnimation)])]),
    trigger('animateStagger', [
        state('50', style('*')),
        state('100', style('*')),
        state('200', style('*')),
        transition('void => 50', query('@*', [stagger('50ms', [animateChild()])], { optional: true })),
        transition('void => 100', query('@*', [stagger('100ms', [animateChild()])], { optional: true })),
        transition('void => 200', query('@*', [stagger('200ms', [animateChild()])], { optional: true }))
    ]),
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvYW5pbWF0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFdEksTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUMvQjtJQUNFLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFNBQVMsRUFBRSxtREFBbUQ7S0FDL0QsQ0FBQztJQUNGLE9BQU8sQ0FBQyx1REFBdUQsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDN0UsRUFDRDtJQUNFLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFFLEdBQUc7UUFDWixLQUFLLEVBQUUsR0FBRztRQUNWLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztLQUNQO0NBQ0YsQ0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUUsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVGLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlGLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0tBQy9GLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbmltYXRlLCBhbmltYXRlQ2hpbGQsIGFuaW1hdGlvbiwgcXVlcnksIHN0YWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9ufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuY29uc3QgY3VzdG9tQW5pbWF0aW9uID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogJ3t7b3BhY2l0eX19JyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKHt7c2NhbGV9fSkgdHJhbnNsYXRlM2Qoe3t4fX0sIHt7eX19LCB7e3p9fSknXG4gICAgfSksXG4gICAgYW5pbWF0ZSgne3tkdXJhdGlvbn19IHt7ZGVsYXl9fSBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSknLCBzdHlsZSgnKicpKVxuICBdLFxuICB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBkdXJhdGlvbjogJzIwMG1zJyxcbiAgICAgIGRlbGF5OiAnMG1zJyxcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIHNjYWxlOiAnMScsXG4gICAgICB4OiAnMCcsXG4gICAgICB5OiAnMCcsXG4gICAgICB6OiAnMCdcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBOZ3hBdXRoRmlyZWJhc2V1aUFuaW1hdGlvbnMgPSBbXG4gIHRyaWdnZXIoJ2FuaW1hdGUnLCBbdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW3VzZUFuaW1hdGlvbihjdXN0b21BbmltYXRpb24pXSldKSxcblxuICB0cmlnZ2VyKCdhbmltYXRlU3RhZ2dlcicsIFtcbiAgICBzdGF0ZSgnNTAnLCBzdHlsZSgnKicpKSxcbiAgICBzdGF0ZSgnMTAwJywgc3R5bGUoJyonKSksXG4gICAgc3RhdGUoJzIwMCcsIHN0eWxlKCcqJykpLFxuXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiA1MCcsIHF1ZXJ5KCdAKicsIFtzdGFnZ2VyKCc1MG1zJywgW2FuaW1hdGVDaGlsZCgpXSldLCB7b3B0aW9uYWw6IHRydWV9KSksXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAxMDAnLCBxdWVyeSgnQConLCBbc3RhZ2dlcignMTAwbXMnLCBbYW5pbWF0ZUNoaWxkKCldKV0sIHtvcHRpb25hbDogdHJ1ZX0pKSxcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IDIwMCcsIHF1ZXJ5KCdAKicsIFtzdGFnZ2VyKCcyMDBtcycsIFthbmltYXRlQ2hpbGQoKV0pXSwge29wdGlvbmFsOiB0cnVlfSkpXG4gIF0pLFxuXTtcbiJdfQ==