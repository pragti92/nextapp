import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"

export function InnerContent() {
    return (  
        <CardBody>
             <div className="mb-3 flex items-center justify-between">
             
          <Typography color="gray">
          Ready to make a difference?

          <br/>
          Student / Early Career
Chances are you're not looking for business as usual. Neither are we. Find out more about our student and entry level opportunities.
<br/>
Professionals
A great workplace thrives on ideas and opportunity. You’ll find both at Cognizant. Follow your ideas, and choose innovative career tracks. Challenge convention.
<br/>
Executives
You’re ready to lead and influence change. You want to make a difference. Discover what we have to offer, and what we can do together.
          </Typography>
          </div></CardBody>
      
    );
  }

  