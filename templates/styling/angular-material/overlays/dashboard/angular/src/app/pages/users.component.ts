import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface UserItem {
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatChipsModule, MatCardModule, MatIconModule],
  template: `
    <h1 class="page-title">Users</h1>
    <mat-card appearance="outlined">
      <mat-card-content>
        <table mat-table [dataSource]="users" class="users-table">
          <ng-container matColumnDef="avatar">
            <th mat-header-cell *matHeaderCellDef>Avatar</th>
            <td mat-cell *matCellDef="let user" class="avatar-cell">{{ user.avatar }}</td>
          </ng-container>

          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let user" class="name-cell">{{ user.name }}</td>
          </ng-container>

          <ng-container matColumnDef="email">
            <th mat-header-cell *matHeaderCellDef>Email</th>
            <td mat-cell *matCellDef="let user" class="email-cell">{{ user.email }}</td>
          </ng-container>

          <ng-container matColumnDef="role">
            <th mat-header-cell *matHeaderCellDef>Role</th>
            <td mat-cell *matCellDef="let user">{{ user.role }}</td>
          </ng-container>

          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let user">
              <mat-chip [class]="user.status.toLowerCase()">
                <mat-icon class="status-icon">{{ user.status === 'Active' ? 'check_circle' : 'cancel' }}</mat-icon>
                {{ user.status }}
              </mat-chip>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .page-title { font-size: 1.5rem; color: #212121; margin-bottom: 24px; }
    .users-table { width: 100%; }
    .avatar-cell { font-size: 1.5rem; }
    .name-cell { font-weight: 600; }
    .email-cell { color: #666; }
    .status-icon { font-size: 16px; width: 16px; height: 16px; margin-right: 4px; }
    .active { background: #e8f5e9 !important; color: #2e7d32 !important; }
    .inactive { background: #ffebee !important; color: #c62828 !important; }
  `]
})
export class UsersComponent {
  displayedColumns: string[] = ['avatar', 'name', 'email', 'role', 'status'];

  users: UserItem[] = [
    { avatar: '👩‍💼', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { avatar: '👨‍💻', name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { avatar: '👩‍🎨', name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
    { avatar: '👨‍🔧', name: 'Dan Wilson', email: 'dan@example.com', role: 'Editor', status: 'Active' },
    { avatar: '👩‍🔬', name: 'Eve Martinez', email: 'eve@example.com', role: 'Admin', status: 'Active' },
    { avatar: '👨‍🏫', name: 'Frank Lee', email: 'frank@example.com', role: 'Viewer', status: 'Inactive' },
  ];
}
