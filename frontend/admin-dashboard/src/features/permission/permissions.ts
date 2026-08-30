export  enum  Permission  {

  Dashboard = 1 << 0,   // 1
  Customers = 1 << 1,   // 2
  Products  = 1 << 2,   // 4
  Orders    = 1 << 3,   // 8
  Reports   = 1 << 4,   // 16
  Users     = 1 << 5,   // 32
  Settings  = 1 << 6,   // 64
}