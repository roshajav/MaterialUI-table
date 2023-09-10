import React, { useState } from "react";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Modal,
  Fade
} from "@mui/material";

const ProjectPortfolio = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("Mouse Hover");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Mouse Leave");
    setOpen(false);
  };
  return (
    <Paper>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell-header">Quality Gates</TableCell>
            <TableCell className="table-cell-header">Pre Dev</TableCell>
            <TableCell className="table-cell-header">Dev</TableCell>
            <TableCell className="table-cell-header">QA</TableCell>
            <TableCell className="table-cell-header">UAT</TableCell>
            <TableCell className="table-cell-header">Production</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="table-cell">CMS</TableCell>
            <TableCell className="table-cell">
              <Button
                onMouseEnter={handleOpen}
                // This is the line that was missing
                onMouseLeave={handleClose}
              >
                Open Modal
              </Button>
            </TableCell>
            <TableCell className="table-cell">
              <Button onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                Open Modal
              </Button>
            </TableCell>
            <TableCell className="table-cell">
              <Button onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                Open Modal
              </Button>
            </TableCell>
            <TableCell className="table-cell">
              <Button onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                Open Modal
              </Button>
            </TableCell>
            <TableCell className="table-cell">
              <Button onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                Open Modal
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <div>This is the modal content</div>
        </Fade>
      </Modal>
    </Paper>
  );
};

export default ProjectPortfolio;
