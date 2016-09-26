﻿namespace STSEngine {

    export class PointService implements IPointService {
        public copy(point: IPoint): IPoint {
            return new Point(point.getX(), point.getY());
        }

        public add(p1: IPoint, p2: IPoint): IPoint {
            return new Point(p1.getX() + p2.getX(), p1.getY() + p2.getY());
        }

        public substract(p1: IPoint, p2: IPoint): IPoint {
            return new Point(p1.getX() - p2.getX(), p1.getY() - p2.getY());
        }
    }
}