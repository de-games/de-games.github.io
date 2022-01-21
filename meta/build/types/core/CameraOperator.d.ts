import * as THREE from 'three';
import { World } from '../world/World';
import { IInputReceiver } from '../interfaces/IInputReceiver';
import { KeyBinding } from './KeyBinding';
import { Character } from '../characters/Character';
import { IUpdatable } from '../interfaces/IUpdatable';
import { Vector3 } from 'three';
export declare enum CameraType {
    Player = 1,
    Free = 2,
    Demo = 3
}
export declare class CameraOperator implements IInputReceiver, IUpdatable {
    updateOrder: number;
    world: World;
    camera: THREE.Camera;
    cameraType: CameraType;
    target: THREE.Vector3;
    sensitivity: THREE.Vector2;
    radius: number;
    theta: number;
    phi: number;
    onMouseDownPosition: THREE.Vector2;
    onMouseDownTheta: any;
    onMouseDownPhi: any;
    targetRadius: number;
    movementSpeed: number;
    actions: {
        [action: string]: KeyBinding;
    };
    upVelocity: number;
    forwardVelocity: number;
    rightVelocity: number;
    followMode: boolean;
    characterCaller: Character;
    private demoX;
    private demoDir;
    constructor(world: World, camera: THREE.Camera, cameraType: CameraType, sensitivityX?: number, sensitivityY?: number);
    setSensitivity(sensitivityX: number, sensitivityY?: number): void;
    setRadius(value: number, instantly?: boolean): void;
    move(deltaX: number, deltaY: number): void;
    update(timeScale: number): void;
    handleKeyboardEvent(event: KeyboardEvent, code: string, pressed: boolean): void;
    handleMouseWheel(event: WheelEvent, value: number): void;
    handleMouseButton(event: MouseEvent, code: string, pressed: boolean): void;
    handleMouseMove(event: MouseEvent, deltaX: number, deltaY: number): void;
    inputReceiverInit(): void;
    inputReceiverUpdate(timeStep: number): void;
    translate: (target: THREE.Vector3) => void;
    setTarget: (target: THREE.Vector3, lookAt: THREE.Vector3) => void;
}
